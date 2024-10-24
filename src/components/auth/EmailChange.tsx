import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface EmailChangeProps {
  onBack?: (navigate: NavigateFunction) => void;
  email: string;
}

const EmailChange = ({ email, onBack }: EmailChangeProps) => {
  const emailFallback = email.slice(0, 2).toUpperCase();

  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack(navigate);
    } else {
      navigate(-1);
    }
  };

  return (
    <section className="bg-shadeBackground p-4 rounded-[6px] flex justify-between items-center h-[64px]">
      <div className="flex items-center gap-4">
        <Avatar className="bg-white h-[44px] w-[44px] rounded-[6px]">
          <AvatarFallback className="font-bold text-base bg-white">
            {emailFallback}
          </AvatarFallback>
        </Avatar>
        <h2 className="font-semibold">{email}</h2>
      </div>

      {onBack && (
        <p
          onClick={handleBack}
          className="text-sm font-Urbanist font-semibold text-blowSecondary cursor-pointer"
        >
          Change Email
        </p>
      )}
    </section>
  );
};

export default EmailChange;
