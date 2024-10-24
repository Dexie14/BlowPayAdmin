import { ArrowRightIcon } from "@/assets/svgComp/General";
import React, { ReactNode } from "react";

type IconButtonProps = {
  icon: ReactNode;
  text: string;
  extraText?: string;
  onClick?: () => void;
  className?: string;
};

const TopCard: React.FC<IconButtonProps> = ({
  icon,
  text,
  onClick,
  className,
  extraText,
}) => {
  return (
    <div
      onClick={onClick}
      className={`my-6 cursor-pointer bg-[#F7F8FA] rounded-[6px] text-blowSecondary flex items-center gap-2 h-[40px] w-[150px] px-3 text-sm font-medium justify-center ${className}`}
    >
      {icon}
      {text}
      <ArrowRightIcon />
      <span className="text-blueGray">{extraText}</span>
    </div>
  );
};

export default TopCard;
