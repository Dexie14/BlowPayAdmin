import { ProgressIcon } from "@/assets/svgComp/CardGroupIcons";
import { DataItem } from "./CardTable";

type props = {
  data: DataItem;
};

const Analytics = ({ data }: props) => {
  const steps = [
    {
      label: "Attempted to pay with card",
      status: "completed",
    },
    {
      label: "Successfully paid with card",
      status: "completed",
    },
    {
      label: "failed",
      status: "failed",
    },
  ];

  return (
    <div>
      <p className="font-semibold">Analytics</p>
      <section className="my-4 flex items-center justify-between w-[90%]">
        <div>
          <p className="text-blueGray text-xs">Card Type</p>
          <h3 className="font-semibold">{data?.CardType}</h3>
        </div>
        <div className="w-[40%]">
          <p className="text-blueGray text-xs">Card Number</p>
          <h3 className="font-semibold">{data?.CardNumber}</h3>
        </div>
      </section>
      <section className="my-4 flex items-center justify-between w-[90%]">
        <div>
          <p className="text-blueGray text-xs">Authorization</p>
          <h3 className="font-semibold">AUTH_o44g4f3fhwkewr</h3>
        </div>
        <div className="w-[40%]">
          <p className="text-blueGray text-xs">Bank and Country</p>
          <h3 className="font-semibold">GTBank (NG)</h3>
        </div>
      </section>
      <section className="my-4 flex items-center justify-between w-[90%]">
        <div>
          <p className="text-blueGray text-xs">IP Address</p>
          <h3 className="font-semibold">192.443.5332.5343</h3>
        </div>
        <div className="w-[40%]">
          <p className="text-blueGray text-xs">Card Type</p>
          <h3 className="font-semibold">{data?.CardNumber}</h3>
        </div>
      </section>
      <hr className="my-4 border border-borderOutline" />
      <section className="flex items-center justify-between w-[40%]">
        <aside className="flex flex-col space-y-4">
          <div>
            <p className="text-blueGray text-xs">Device Type</p>
            <h3 className="font-semibold">Desktop</h3>
          </div>
          <div>
            <p className="text-blueGray text-xs">Atemots</p>
            <h3 className="font-semibold">1 attempt</h3>
          </div>
          <div>
            <p className="text-blowSecondary text-xs">Errors</p>
            <h3 className="font-semibold">0 errors</h3>
          </div>
        </aside>
        <div className="">
          <div className="">
            <h3 className="font-bold text-center">4</h3>
            <p className="text-blueGray text-xs">Seconds</p>
          </div>
        </div>
      </section>
      <hr className="my-4 border border-borderOutline" />
      <div className="flex flex-col ">
        {steps.map((step, index) => (
          <div className="flex " key={index}>
            <span className="w-[30%] text-xs text-blueGray ">{step.label}</span>
            {/* Icon */}
            <div
              className={` flex flex-col items-center justify-center ml-2 ${
                step?.status === "failed"
                  ? "text-blowSecondary"
                  : "text-disabledText"
              } `}
            >
              <ProgressIcon />
              {/* Line between icons */}
              {index !== steps.length - 1 && (
                <hr className="h-6 border my-1 border-disabledText" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
