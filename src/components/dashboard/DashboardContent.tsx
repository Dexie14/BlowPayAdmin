import MapDistribution from "./charts/MapDistribution";
import UserPieChart from "./charts/UserPieChart";
import InfoCard from "./InfoCard";
import Statistics from "./Statistics";
import TransactionCard from "./TransactionCard";
import WalletCard from "./WalletCard";

export type InfoType = {
  title: string;
  type: string;
  percentage: string;
  count: number;
}[];

const DashboardContent = () => {
  const infoData: InfoType = [
    {
      title: "Total User",
      type: "user",
      count: 13675,
      percentage: "+2.51%",
    },
    {
      title: "Total Income",
      type: "user",
      count: 97499,
      percentage: "+2.51%",
    },
    {
      title: "Total Expenses",
      type: "expense",
      count: 42530,
      percentage: "-3.56%",
    },
    {
      title: "Total Savings",
      type: "saving",
      count: 54961,
      percentage: "+0.94%",
    },
    {
      title: "Average",
      type: "user",
      count: 370,
      percentage: "+1.2%",
    },
    {
      title: "Apps",
      type: "user",
      count: 5232,
      percentage: "+1.2%",
    },
  ];
  return (
    <div className="">
      <div className="w-[97%]">
        <InfoCard infoData={infoData} />
      </div>
      <section className="lg:flex items-center justify-between my-7">
        <div className="lg:w-[43%]  mb-5 lg:mb-0">
          <WalletCard />
        </div>
        <div className="lg:w-[53%]">
          <Statistics />
        </div>
      </section>
      <section className="lg:flex items-center justify-between ">
        <div className="lg:w-[43%] mb-5 lg:mb-0">
          <TransactionCard />
        </div>
        <div className="lg:w-[53%]">
          <section className="flex items-center justify-between">
            <div className="w-[60%]">
              <MapDistribution />
            </div>
            <div className="w-[35%]">
              <UserPieChart />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default DashboardContent;
