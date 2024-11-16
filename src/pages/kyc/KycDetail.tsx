import { CustomerIcon } from "@/assets/svgComp/SidebarIcons";
import TopCard from "@/components/dashboard/TopCard";
import Container from "@/components/layout/Container";
import { useLocation } from "react-router-dom";

import usa from "@/assets/images/usa.png";
import ngn from "@/assets/images/ngn.png";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlockIcon, CopyIcon } from "@/assets/svgComp/CardGroupIcons";
import { Switch } from "@/components/ui/switch";
import {
  PhoneIcon,
  ProfileIcon,
  TransMailIcon,
} from "@/assets/svgComp/TransactionIcon";
import { cardType } from "@/components/wallet/walletTable";
import Tier1 from "@/components/KYC/Tier1";
import Tier2 from "@/components/KYC/Tier2";
import Tier3 from "@/components/KYC/Tier3";

const KycDetail = () => {
  const location = useLocation();
  const { data } = location.state || {}; // Retrieve the object

  if (!data) {
    return <div>No data available</div>; // Handle case where no data is passed
  }

  console.log(data, "data");

  const infoImages: Record<cardType, JSX.Element> = {
    NGN: <img src={ngn} alt="ngn" className="w-[24px] h-[24px]" />,
    USD: <img src={usa} alt="Mastercard" className="w-[24px] h-[24px]" />,
  };

  return (
    <div>
      <TopCard text="KYC Management" icon={<CustomerIcon />} className="w-fit" />
      <Container>
        <section className="flex justify-between w-full ">
          <div className="w-[30%] px-3 py-10 bg-shadeBackground rounded-[20px] h-[500px]">
            <aside className="flex items-center gap-4 ">
              <div>
                <h6 className="font-semibold text-xs">{data?.email}</h6>
                <h6 className="text-blueGray text-[10px]">
                  Added on Oct 23, 2023
                </h6>
              </div>
              <div className="bg-transparent border rounded-[10px] text-nowrap text-xs h-[38px] w-fit px-4 py-1 flex items-center justify-center gap-2 font-semibold">
                {infoImages[data?.walletTypeCode as cardType]}
                <div>
                  {data.walletType}
                  <p className="text-[10px] text-disabledText mt-1 font-normal">
                    {data.walletTypeCode}
                  </p>
                </div>
              </div>
            </aside>
            <main className="mt-12">
              <div className="text-xs flex justify-between items-center border-b border-borderOutline pb-2 mb-7">
                <h6 className="flex items-center gap-3">
                  <ProfileIcon /> 5334 * * * * * * 24
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
            <Tabs defaultValue="Tier1" className=" ">
              <TabsList className=" flex justify-between rounded-[20px] h-[77px] bg-shadeBackground px-4 mb-5">
                <div className="flex gap-x-5">
                  <TabsTrigger
                    className=" data-[state=active]:border-b-2 !bg-shadeBackground data-[state=active]:border-t-0 data-[state=active]:border-x-0 !rounded-none pb-2 data-[state=active]:border-blowSecondary data-[state=active]:font-bold  text-blueGray "
                    value="Tier1"
                  >
                    KYC  Tier 1
                  </TabsTrigger>
                  <TabsTrigger
                    className=" data-[state=active]:border-b-2 !bg-shadeBackground data-[state=active]:border-t-0 data-[state=active]:border-x-0 !rounded-none pb-2 data-[state=active]:border-blowSecondary data-[state=active]:font-bold  text-blueGray "
                    value="Tier2"
                  >
                    KYC  Tier 2
                  </TabsTrigger>
                  <TabsTrigger
                    className=" data-[state=active]:border-b-2 !bg-shadeBackground data-[state=active]:border-t-0 data-[state=active]:border-x-0 !rounded-none pb-2 data-[state=active]:border-blowSecondary data-[state=active]:font-bold  text-blueGray "
                    value="Tier3"
                  >
                    KYC  Tier 3
                  </TabsTrigger>
                </div>
              </TabsList>
              <TabsContent
                value="Tier1"
                className="bg-shadeBackground mb-5 w-full p-6 rounded-[20px] min-h-[400px]"
              >
                <Tier1 />
              </TabsContent>
              <TabsContent
                value="Tier2"
                className="bg-shadeBackground mb-5 w-full p-6 rounded-[20px] min-h-[400px]"
              >
                <Tier2 />
              </TabsContent>
              <TabsContent
                value="Tier3"
                className="bg-shadeBackground mb-5 w-full p-6 rounded-[20px] min-h-[400px]"
              >
                <Tier3 />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default KycDetail;
