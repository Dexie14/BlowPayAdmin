import { TransIcon } from "@/assets/svgComp/SidebarIcons";
import TopCard from "@/components/dashboard/TopCard";
import Container from "@/components/layout/Container";
import { useLocation } from "react-router-dom";

import override from "@/assets/images/override.png";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlockIcon, CopyIcon } from "@/assets/svgComp/CardGroupIcons";
import { Switch } from "@/components/ui/switch";
import EmptyRefundState from "@/components/cardMgt/EmptyRefundState";
import {
  PhoneIcon,
  ProfileIcon,
  TransMailIcon,
} from "@/assets/svgComp/TransactionIcon";
import RecentTransaction from "@/components/transaction/RecentTransaction";

const TransactionDetail = () => {
  const location = useLocation();
  const { data } = location.state || {}; // Retrieve the object

  if (!data) {
    return <div>No data available</div>; // Handle case where no data is passed
  }

  console.log(data, "data");

  return (
    <div>
      <TopCard text="Transactions" icon={<TransIcon />} className="w-fit" />
      <Container>
        <section className="flex justify-between w-full ">
          <div className="w-[30%] px-5 py-10 bg-shadeBackground rounded-[20px] h-[500px]">
            <aside className="flex items-center gap-4 ">
              <div>
                <img
                  src={override}
                  alt="override"
                  className="w-[56px] h-[56px]"
                />
              </div>
              <div>
                <h6 className="font-semibold">{data?.email}</h6>
                <h6 className="text-blueGray text-xs">Added on Oct 23, 2023</h6>
              </div>
            </aside>
            <main className="mt-12">
              <div className="text-xs flex justify-between items-center border-b border-borderOutline pb-2 mb-7">
                <h6 className="flex items-center gap-3">
                  <ProfileIcon /> BM/00001
                </h6>
                <h6 className="cursor-pointer">
                  <CopyIcon />
                </h6>
              </div>
              <div className="text-xs flex justify-between items-center border-b border-borderOutline pb-2 mb-7">
                <h6 className="flex items-center gap-3">
                  <TransMailIcon /> {data?.email}
                </h6>
                <h6 className="cursor-pointer">
                  <CopyIcon />
                </h6>
              </div>
              <div className="text-xs flex justify-between items-center border-b border-borderOutline pb-2 mb-7">
                <h6 className="flex items-center gap-3">
                  <PhoneIcon /> 234(0)812345667
                </h6>
                <h6 className="cursor-pointer">
                  <CopyIcon />
                </h6>
              </div>
            </main>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <BlockIcon />
                <p className="font-semibold text-sm">Blacklist this customer</p>
              </div>
              <Switch className="!bg-blueGray data-[state=checked]:!bg-slate-900" />
            </div>
          </div>
          <div className="w-[68%] ">
            <Tabs defaultValue="Transactions" className=" ">
              <TabsList className=" flex justify-between rounded-[20px] h-[77px] bg-shadeBackground px-4 mb-5">
                <div className="flex gap-x-5">
                  <TabsTrigger
                    className=" data-[state=active]:border-b-2 !bg-shadeBackground data-[state=active]:border-t-0 data-[state=active]:border-x-0 !rounded-none pb-2 data-[state=active]:border-blowSecondary data-[state=active]:font-bold  text-blueGray "
                    value="Transactions"
                  >
                    Transactions
                  </TabsTrigger>
                  <TabsTrigger
                    className="data-[state=active]:border-b-2 pb-2 bg-shadeBackground data-[state=active]:border-t-0 data-[state=active]:border-x-0 !rounded-none   data-[state=active]:border-blowSecondary text-blueGray data-[state=active]:font-bold"
                    value="Wallets"
                  >
                    Virtual Wallets
                  </TabsTrigger>
                  <TabsTrigger
                    className="data-[state=active]:border-b-2 pb-2 bg-shadeBackground data-[state=active]:border-t-0 data-[state=active]:border-x-0 !rounded-none   data-[state=active]:border-blowSecondary text-blueGray data-[state=active]:font-bold"
                    value="Card"
                  >
                    Virtual Card
                  </TabsTrigger>
                </div>
              </TabsList>
              <TabsContent
                value="Transactions"
                className=" rounded-[20px] min-h-[400px]"
              >
                <RecentTransaction />
              </TabsContent>
              <TabsContent
                value="Wallets"
                className="bg-shadeBackground p-6 rounded-[20px] min-h-[400px]"
              >
                <div className="flex justify-center items-center ">
                  <EmptyRefundState />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default TransactionDetail;
