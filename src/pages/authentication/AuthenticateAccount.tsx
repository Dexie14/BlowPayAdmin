import AuthTitle from "@/components/auth/AuthTitle";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import OtpInput from "react-otp-input";

const AuthenticateAccount = () => {
  const [otpValues, setOtpValues] = useState("");

  return (
    <section className="flex items-center h-full ">
      <div>
        <AuthTitle title="Authenticate your Account" />
        <p className="my-7 text-lg text-disabledText">
          Protecting your activities our priority. Please confirm your account
          by entering the authentication code sent to mongoro@verifrica.com
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
          disabled={otpValues.length !== 6}
          className="bg-buttonColor text-blowText text-lg font-normal h-[58px] hover:text-white rounded-[6px] w-full my-7"
        >
          Authenticate
        </Button>
      </div>
    </section>
  );
};

export default AuthenticateAccount;
