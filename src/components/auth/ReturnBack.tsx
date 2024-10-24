import { BackIcon } from "@/assets/svgComp/AuthIcons";
import React from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";

interface ReturnBackProps {
  onBack?: (navigate: NavigateFunction) => void;
  className?: string;
}

const ReturnBack: React.FC<ReturnBackProps> = ({ onBack, className }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack(navigate);
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleBack}
      className={` flex items-center text-sm font-normal gap-2 text-blowText ${className}`}
    >
      <BackIcon /> Back
    </button>
  );
};

export default ReturnBack;

// usage of onBack

// const customBackFunction = (navigate: NavigateFunction) => {
//   navigate('/some-specific-page'); 
// };

// <ReturnBack onBack={customBackFunction} />