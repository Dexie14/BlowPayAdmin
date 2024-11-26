import AuthTitle from "@/components/auth/AuthTitle";
import ReturnBack from "@/components/auth/ReturnBack";
import { Button } from "@/components/ui/button";
// import { getCookie } from "@/utils/cookie"; 

// import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Link,
  NavigateFunction,
  useLocation,
  useNavigate,
  // useNavigate,
} from "react-router-dom";
import PasswordInput from "@/components/input/PasswordInput";
import EmailChange from "@/components/auth/EmailChange";
import { SignIn } from "@/hooks/api/auth/login";
import { useAuthStore } from "@/store/authStore";
import { toast } from "sonner";
import { useEffect } from "react";

const Registerschema = z.object({
  password: z
    .string()
    .min(8, { message: "password must contain at least 8 characters" }),
});

type FormData = z.infer<typeof Registerschema>;

const LoginStepTwo = () => {
  const { state } = useLocation();

  console.log(state)
  const { setCurrentUser } = useAuthStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (state === null) {
      navigate("/auth");
    }
  }, [state, navigate]);

  const {
    register,
    handleSubmit,

    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      password: "",
    },
    resolver: zodResolver(Registerschema),
    mode: "onChange",
  });

  const { loginUser } = SignIn();

  const { isPending, mutateAsync } = loginUser;

  // const cookieValue = getCookie('fL4vMdEDx5r7cz');
  // const cookieValue = Cookies.get('fL4vMdEDx5r7cz');

// console.log(cookieValue, "iddd");  



  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (data[key] !== undefined && data[key] !== null) {
          formData.append(key, data[key].toString());
        }
      });

      if (state?.IntendedEmail) {
        formData.append("emailAddress", state.IntendedEmail);
      }

      await mutateAsync(formData, {
        onSuccess: (response: any) => {
          const user = response?.data;
          if (user) {
            setCurrentUser(user);
            navigate("/");
          }
          toast.success(response?.message);
          // console.log(response, "responsebyzeek")
        },
        onError: (error: any) => {
          toast.error(error?.data?.error);
        },
      });
    } catch (error) {
      console.log("An error occurred: ", error);
    }
  };

  const customBackFunction = (navigate: NavigateFunction) => {
    navigate("/auth");
  };

  return (
    <div>
      <ReturnBack />
      <div className="mt-12 mb-7">
        <AuthTitle
          title="Welcome to Blow Pay"
          subTitle="To continue, Please login"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-7">
          <EmailChange
            email={state?.IntendedEmail}
            onBack={customBackFunction}
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
        <Link
          to="/auth/forgot-password"
          className="text-sm text-blowSecondary cursor-pointer my-1 "
        >
          Forgot your password?
        </Link>

        <Button
          disabled={!isValid}
          className="bg-buttonColor text-blowText text-lg font-normal h-[58px] hover:text-white rounded-[6px] my-7 w-full"
        >
          {isPending ? "Logging..." : "  Log in"}
        </Button>
      </form>
    </div>
  );
};

export default LoginStepTwo;
