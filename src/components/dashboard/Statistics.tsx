import { useState } from "react";
import StatsLineChart from "./charts/StatsLineChart";

type TimeRange = "1D" | "1W" | "1M" | "6M" | "1Y";

const Statistics = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>("1D");

  return (
    <div className="border border-lightGray bg-white rounded-[12px] py-4 px-3 w-full ">
      <aside className="flex gap-5 items-center justify-between mb-5">
        <h4 className="text-xl font-bold">Statistics</h4>
        <div className="flex items-center gap-9 justify-between rounded-[4px]  bg-lightGray p-1  text-xs  text-disabledText ">
          <button
            className={`rounded-[4px] text-sm transition hover:text-blowText ${
              timeRange === "1D"
                ? "bg-[#FFFFFF] text-blowText"
                : "text-disabledText"
            } px-[8px] py-[2px]`}
            onClick={() => setTimeRange("1D")}
          >
            24H
          </button>
          <button
            className={`rounded-[4px] text-sm transition hover:text-blowText ${
              timeRange === "1W"
                ? "bg-[#FFFFFF] text-blowText"
                : "text-disabledText"
            } px-[8px] py-[2px]`}
            onClick={() => setTimeRange("1W")}
          >
            7D
          </button>
          <button
            className={`rounded-[4px] text-sm transition hover:text-blowText ${
              timeRange === "1M"
                ? "bg-[#FFFFFF] text-blowText"
                : "text-disabledText"
            } px-[8px] py-[2px]`}
            onClick={() => setTimeRange("1M")}
          >
            1M
          </button>

          <button
            className={`rounded-[4px] text-sm transition hover:text-blowText ${
              timeRange === "6M"
                ? "bg-[#FFFFFF] text-blowText"
                : "text-disabledText"
            } px-[8px] py-[2px]`}
            onClick={() => setTimeRange("6M")}
          >
            6M
          </button>
          <button
            className={`rounded-[4px] text-sm transition hover:text-blowText ${
              timeRange === "1Y"
                ? "bg-[#FFFFFF] text-blowText"
                : "text-disabledText"
            } px-[8px] py-[2px]`}
            onClick={() => setTimeRange("1Y")}
          >
            1Yr
          </button>
        </div>
      </aside>
      <section>
        <StatsLineChart />
      </section>
    </div>
  );
};

export default Statistics;
