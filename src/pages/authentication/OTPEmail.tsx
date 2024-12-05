import AuthTitle from "@/components/auth/AuthTitle";
import { Button } from "@/components/ui/button";
import { VerifyOtp } from "@/hooks/api/auth/verifyOtp";
import { UserApi } from "@/hooks/api/users/getUsers";
import { useEffect, useState } from "react";

import OtpInput from "react-otp-input";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const OTPEmail = () => {
  const [otpValues, setOtpValues] = useState("");

  const { search } = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(search);
  const userId = queryParams.get("user");

  const { GetUserbyId } = UserApi();
  const { data } = GetUserbyId(userId ?? "");

  const emailAddress = data?.data?.emailAddress ?? "";

  useEffect(() => {
    if (userId === null) {
      navigate("/auth/register");
    }
  }, [userId, navigate]);

  const { verifyOtp } = VerifyOtp();

  const { mutate, isPending } = verifyOtp;

  const onSubmit = (otpValues: string) => {
    const otpData = {
      emailAddress,
      otp: otpValues,
    };

    mutate(otpData, {
      onSuccess: (response: any) => {
        toast.success(response?.message);
        navigate(`/auth`);
      },
      onError: (error: any) => {
        toast.error(error?.data?.message || "Error occured");
      },
    });
    // if (otpData) {
    //   navigate("/auth/login", {
    //     state: {
    //       IntendedEmail: "dex123@gmail.com",
    //     },
    //   });
    // }
  };

  return (
    <section className="flex items-center h-full ">
      <div>
        <AuthTitle title="We emailed you a code" />
        <p className="my-7 text-lg text-disabledText">
          We sent a six digit code to{" "}
          <span className="font-bold text-blowText ">{emailAddress}</span>.
          Enter the Code below
        </p>

        <div className="flex justify-center">
          <OtpInput
            value={otpValues}
            onChange={setOtpValues}
            numInputs={6}
            renderSeparator={<span></span>}
            inputStyle={`bg-shadeBackground  text-[#000000] font-semibold text-[1.5rem] rounded-[6px] border-0 outline-none sm:!h-[64px] !h-[34px] !w-[34px] sm:!w-[64px]  m-[10px]`}
            renderInput={(props) => <input {...props} />}
          />
        </div>
        <Button
          onClick={() => onSubmit(otpValues)}
          disabled={otpValues.length !== 6}
          className="bg-buttonColor text-blowText text-lg font-normal h-[58px] hover:text-white rounded-[6px] w-full my-7"
        >
          {isPending ? "Verifying" : "Verify"}
        </Button>
        <p className="text-lg text-disabledText">
          Didn’t receive an email? Try checking your junk folder{" "}
          <span className="font-bold text-blowSecondary ml-1">Resend Code</span>
        </p>
      </div>
    </section>
  );
};

export default OTPEmail;
