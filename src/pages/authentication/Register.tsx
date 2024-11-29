import { MailIcon } from "@/assets/svgComp/AuthIcons";
import AuthTitle from "@/components/auth/AuthTitle";
import ReturnBack from "@/components/auth/ReturnBack";
import InputField from "@/components/input/InputField";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  useLocation,
   useNavigate
} from "react-router-dom";
import { toast } from "sonner";
import { SignIn } from "@/hooks/api/auth/login";
import PasswordInput from "@/components/input/PasswordInput";

const Registerschema = z.object({
  // email: z
  //   .string()
  //   .email({
  //     message: "Please enter the correct email for a staff account.",
  //   })
  //   .refine((s) => !s.includes(" "), "No spaces allowed"),
  firstName: z.string().refine((s) => !s.includes(" "), "No spaces allowed"),
  lastName: z.string().refine((s) => !s.includes(" "), "No spaces allowed"),
  password: z
    .string()
    .min(8, { message: "password must contain at least 8 characters" }),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

type FormData = z.infer<typeof Registerschema>;

const Register = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("user");

  // console.log(userId);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      password: "",
      acceptTerms: false,
    },
    resolver: zodResolver(Registerschema),
    mode: "onChange",
  });

  const navigate = useNavigate();

  const { acceptInvite } = SignIn(userId);

  const { mutate, isPending } = acceptInvite;

  const onSubmit = (data: FormData) => {
    const formData = new FormData();
    formData.append("firstName", data?.firstName);
    formData.append("lastName", data?.lastName);
    formData.append("password", data?.password);

    mutate(formData, {
      onSuccess: (response: any) => {
        toast.success(response?.message);
        navigate("/auth");
      },
      onError: (error: any) => {
        toast.error(error?.message || "Error registering ");
      },
    });
  };

  // const onSubmit = (data: FormData) => {
  //   console.log(data, "dass");

  //   if (data) {
  //     navigate("/auth/otp", {
  //       state: {
  //         IntendedEmail: data?.email,
  //       },
  //     });
  //   }
  // };

  return (
    <div>
      <ReturnBack />
      <div className="mt-12 mb-7">
        <AuthTitle
          title="Create a new account"
          subTitle="To get started, Please sign up"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <div>
          {errors.email && (
            <div className="w-full bg-fadedblowSecondary border border-dashed border-borderBlowSecondary px-4 py-1  my-7 text-errorBlack text-sm font-semibold">
              {errors.email?.message}
            </div>
          )}
          <InputField
            {...register("email")}
            name="email"
            type="email"
            label="Email"
            placeholder="you@email.com"
          />
        </div> */}

        <div>
          {errors.firstName && (
            <div className="w-full bg-fadedblowSecondary border border-dashed border-borderBlowSecondary px-4 py-1  my-7 text-errorBlack text-sm font-semibold">
              {errors.firstName?.message}
            </div>
          )}
          <InputField
            {...register("firstName")}
            name="firstName"
            type="text"
            label="First Name"
            placeholder="Enter your first name"
          />
        </div>
        <div>
          {errors.lastName && (
            <div className="w-full bg-fadedblowSecondary border border-dashed border-borderBlowSecondary px-4 py-1  my-7 text-errorBlack text-sm font-semibold">
              {errors.lastName?.message}
            </div>
          )}
          <InputField
            {...register("lastName")}
            name="lastName"
            type="text"
            label="Last Name"
            placeholder="Enter your last name"
          />
        </div>
        <div>
          {errors.password && (
            <div className="w-full bg-fadedblowSecondary border border-dashed border-borderBlowSecondary px-4 py-1  my-7 text-errorBlack text-sm font-semibold">
              {errors.password?.message}
            </div>
          )}
          <PasswordInput
            {...register("password")}
            name="password"
            label="Password"
            placeholder="Enter Password"
          />
        </div>
        <div className="flex items-center space-x-4 my-7">
          <Controller
            name="acceptTerms"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="terms"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            )}
          />

          <label
            htmlFor="terms"
            className="text-xs font-normal text-disabledText leading-none  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Send me updates and newsletter about Blowpay products & services
          </label>
        </div>

        {errors.acceptTerms && (
          <div className="text-blowSecondary text-center font-medium mb-4">
            {errors.acceptTerms.message}
          </div>
        )}

        <Button
          disabled={!isValid}
          className="bg-buttonColor text-blowText text-lg font-normal h-[58px] hover:text-white rounded-[6px] w-full"
        >
          <div className="mr-8">
            <MailIcon />
          </div>
          {isPending ? "Verifying..." : "Verify Account"}
        </Button>
      </form>

      <p className="text-center text-disabledText text-sm font-light mt-7">
        By signing up, I agree to the Blow Pay{" "}
        <u className="text-blowSecondary">Terms of Service</u> and acknowledge
        that the <u className="text-blowSecondary">Privacy statement</u> applies
      </p>
    </div>
  );
};

export default Register;
