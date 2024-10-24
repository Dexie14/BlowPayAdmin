import AuthTitle from "@/components/auth/AuthTitle";
import ReturnBack from "@/components/auth/ReturnBack";
import { Link, useLocation } from "react-router-dom";

const PasswordInstruction = () => {
  const { state } = useLocation();

  return (
    <div>
      <ReturnBack />
      <div className="mt-12 mb-7">
        <AuthTitle title="Instruction Sent!" />
      </div>

      <p className="my-7 font-normal text-disabledText">
        If a Blow Pay Account exists for the email{" "}
        <span className="font-bold text-blowText">{state?.IntendedEmail}</span>,
        instructions for resetting your password will be sent to it.
      </p>
      <p className="my-7 font-normal text-disabledText">
        You’ll receive this email within 5 minutes. BE sure to check your spam
        folder too.
      </p>
      <p className="text-disabledText text-sm my-7">
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

export default PasswordInstruction;
