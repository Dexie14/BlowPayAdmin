import AuthTitle from "@/components/auth/AuthTitle";
import ReturnBack from "@/components/auth/ReturnBack";
import InputField from "@/components/input/InputField";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link, useNavigate } from "react-router-dom";

const Registerschema = z.object({
  email: z
    .string()
    .email({
      message: "Please enter the correct email for a staff account.",
    })
    .refine((s) => !s.includes(" "), "No spaces allowed"),
});

type FormData = z.infer<typeof Registerschema>;

const ForgotPassword = () => {
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
      navigate("/auth/password-instruction", {
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
        <AuthTitle
          title="Forgot password?"
          subTitle="Enter your email address for instruction"
        />
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
          Send Reset Instruction
        </Button>
      </form>

      <p className=" text-sm text-disabledText my-7">
        Wrong account?
        <Link
          to="/auth"
          className="font-bold mx-1 text-blowSecondary opacity-100 cursor-pointer"
        >
          Log in
        </Link>
        Instead
      </p>
    </div>
  );
};

export default ForgotPassword;
