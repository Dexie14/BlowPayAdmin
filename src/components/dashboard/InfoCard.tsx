import { ExpenseIcon, SavingIcon, UserIcon } from "@/assets/svgComp/General";
import { InfoType } from "./DashboardContent";
import { v4 } from "uuid";

type props = {
  infoData: InfoType;
};
const InfoCard = ({ infoData }: props) => {
  type iconInfoType = "user" | "expense" | "saving";

  const infoImages: Record<iconInfoType, JSX.Element> = {
    user: <UserIcon />,
    expense: <ExpenseIcon />,
    saving: <SavingIcon />,
  };

  return (
    <div className="flex items-center gap-x-4 ">
      {infoData?.map((item) => {
        return (
          <main
            key={v4()}
            className="flex gap-2 mt-4 flex-col bg-white py-5 px-4 rounded-[10px] shadow-custom w-[180px] h-[90px]"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-blueGray">
                {item?.title}
              </p>
              <div className="text-blueGray">
                {infoImages[item?.type as iconInfoType]}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold text-mediumGray">
                {item?.count?.toLocaleString()}
              </p>
              <p
                className={`text-xs font-semibold ${
                  item?.percentage.includes("-")
                    ? "text-blowSecondary"
                    : "text-teal"
                }`}
              >
                {item?.percentage}
              </p>
            </div>
          </main>
        );
      })}
    </div>
  );
};

export default InfoCard;
