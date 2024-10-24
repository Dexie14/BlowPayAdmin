import { MailIcon } from "@/assets/svgComp/AuthIcons";
import AuthTitle from "@/components/auth/AuthTitle";
import ReturnBack from "@/components/auth/ReturnBack";
import InputField from "@/components/input/InputField";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";

const Registerschema = z.object({
  email: z
    .string()
    .email({
      message: "Please enter the correct email for a staff account.",
    })
    .refine((s) => !s.includes(" "), "No spaces allowed"),
});

type FormData = z.infer<typeof Registerschema>;

const Login = () => {
  const {
    register,
    handleSubmit,

    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(Registerschema),
    mode: "onChange",
  });

  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    console.log(data, "dass");
    if (data) {
      navigate("/auth/login", {
        state: {
          IntendedEmail: data?.email,
        },
      });
    }
  };

  return (
    <div>
      <ReturnBack />
      <div className="mt-12 mb-7">
        <AuthTitle title="Welcome" subTitle="To continue, Please login" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {errors.email && (
            <div className="w-full bg-fadedblowSecondary border border-dashed border-borderBlowSecondary px-4 py-1  my-7 text-errorBlack text-sm font-semibold">
              {errors.email?.message}
            </div>
          )}
          <InputField
            {...register("email")}
            name="email"
            type="email"
            label="Email Address"
            placeholder="Enter your email"
            className="mb-7"
          />
        </div>

        <Button
          disabled={!isValid}
          className="bg-buttonColor text-blowText text-lg font-normal h-[58px] hover:text-white rounded-[6px] w-full"
        >
          <div className="mr-8">
            <MailIcon />
          </div>
          Continue
        </Button>
      </form>

      <p className="text-center text-disabledText text-sm font-light mt-7">
        This site is protected. View our <u className="text-blowSecondary">Terms of Service</u> and acknowledge
        that the <u className="text-blowSecondary">Privacy statement</u> applies
      </p>
    </div>
  );
};

export default Login;
