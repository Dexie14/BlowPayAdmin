import AuthTitle from "@/components/auth/AuthTitle";
import ReturnBack from "@/components/auth/ReturnBack";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import PasswordInput from "@/components/input/PasswordInput";
import EmailChange from "@/components/auth/EmailChange";

const Registerschema = z.object({
  password: z
    .string()
    .min(8, { message: "Create a password with at least 8 characters" }),
  confirmPassword: z
    .string()
    .min(8, { message: "Create a password with at least 8 characters" }),
});

type FormData = z.infer<typeof Registerschema>;

const ChangePassword = () => {
  const {
    register,
    handleSubmit,

    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(Registerschema),
    mode: "onChange",
  });

  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    console.log(data, "dass");
    if (data) {
      navigate("/auth");
    }
  };

  return (
    <div>
      <ReturnBack />
      <div className="mt-12 mb-7">
        <AuthTitle title="Choose a new password?" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-7">
          <EmailChange email={"deborah@gmail.com"} />
        </div>
        <div>
          <PasswordInput
            {...register("password")}
            name="password"
            label="Password"
            placeholder="New Password"
            error={errors.password?.message}
          />
        </div>
        <div className="my-7">
          <PasswordInput
            {...register("confirmPassword")}
            name="confirmPassword"
            label="Confirm Password"
            placeholder="New Password"
            error={errors.confirmPassword?.message}
          />
        </div>

        <Button
          disabled={!isValid}
          className="bg-buttonColor text-blowText text-lg font-normal h-[58px] hover:text-white rounded-[6px]  w-full"
        >
          Change Password
        </Button>
      </form>
    </div>
  );
};

export default ChangePassword;
