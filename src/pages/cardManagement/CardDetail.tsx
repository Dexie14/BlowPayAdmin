import { CardMgtIcon } from "@/assets/svgComp/SidebarIcons";
import { cardType } from "@/components/cardMgt/CardTable";
import TopCard from "@/components/dashboard/TopCard";
import Container from "@/components/layout/Container";
import { useLocation } from "react-router-dom";

import mastercard from "@/assets/images/mastercard.png";
import visa from "@/assets/images/VISA.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlockIcon } from "@/assets/svgComp/CardGroupIcons";
import { Switch } from "@/components/ui/switch";
import Analytics from "@/components/cardMgt/Analytics";
import EmptyRefundState from "@/components/cardMgt/EmptyRefundState";

const CardDetail = () => {
  const location = useLocation();
  const { data } = location.state || {}; // Retrieve the object

  if (!data) {
    return <div>No data available</div>; // Handle case where no data is passed
  }

  console.log(data, "data");

  const infoImages: Record<cardType, JSX.Element> = {
    Visa: <img src={visa} alt="Visa" className="w-[48px] h-[32px]" />,
    Mastercard: (
      <img src={mastercard} alt="Mastercard" className="w-[48px] h-[32px]" />
    ),
  };
  return (
    <div>
      <TopCard
        text="Card Management"
        icon={<CardMgtIcon />}
        className="w-fit"
        extraText={data?.email}
      />
      <Container>
        <section className="flex justify-between w-full ">
          <div className="w-[38%] px-5 py-10 bg-shadeBackground rounded-[20px] h-[500px]">
            <aside className="flex justify-between ">
              <div>
                <p className="text-blueGray text--xs">Card Details</p>
                <h5 className="font-semibold text-sm my-1">
                  {data?.CardNumber}
                </h5>
                <div className="flex items-center gap-2 ">
                  <div
                    className={`h-[10px] w-[10px] rounded-full ${
                      data?.Status === "inactive"
                        ? "bg-disabledText"
                        : "bg-brightGreen "
                    } `}
                  />
                  {data?.Status}
                </div>
              </div>
              <div className="bg-lightGray rounded-[10px] h-[38px] w-fit px-2 py-1 flex items-center justify-center gap-2 font-semibold">
                {data.CardType} {infoImages[data?.CardType as cardType]}
              </div>
            </aside>
            <main className="mt-12">
              <div className="text-xs flex justify-between items-center border-b border-borderOutline pb-2 mb-7">
                <h6>Date Created:</h6>
                <h6 className="font-semibold">{data?.created}</h6>
              </div>
              <div className="text-xs flex justify-between items-center border-b border-borderOutline pb-2 mb-7">
                <h6>Customer’s Name</h6>
                <h6 className="font-semibold">{data?.CustomerName}</h6>
              </div>
              <div className="text-xs flex justify-between items-center border-b border-borderOutline pb-2 mb-7">
                <h6>Customer’s Email:</h6>
                <h6 className="font-semibold">{data?.email}</h6>
              </div>
            </main>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <BlockIcon />
                <p className="font-semibold text-sm">Block Card</p>
              </div>
              <Switch className="!bg-blueGray data-[state=checked]:!bg-slate-900" />
            </div>
          </div>
          <div className="w-[60%] ">
            <Tabs defaultValue="Analytics" className=" ">
              <TabsList className=" flex justify-between rounded-[20px] h-[77px] bg-shadeBackground px-4 mb-5">
                <div className="flex gap-x-5">
                  <TabsTrigger
                    className=" data-[state=active]:border-b-2 !bg-shadeBackground data-[state=active]:border-t-0 data-[state=active]:border-x-0 !rounded-none pb-2 data-[state=active]:border-blowSecondary data-[state=active]:font-bold  text-blueGray "
                    value="Analytics"
                  >
                    Analytics
                  </TabsTrigger>
                  <TabsTrigger
                    className="data-[state=active]:border-b-2 pb-2 bg-shadeBackground data-[state=active]:border-t-0 data-[state=active]:border-x-0 !rounded-none   data-[state=active]:border-blowSecondary text-blueGray data-[state=active]:font-bold"
                    value="Refunds"
                  >
                    Refunds
                  </TabsTrigger>
                </div>
              </TabsList>
              <TabsContent
                value="Analytics"
                className="bg-shadeBackground p-6 rounded-[20px] min-h-[400px]"
              >
                <Analytics data={data} />
              </TabsContent>
              <TabsContent
                value="Refunds"
                className="bg-shadeBackground p-6 rounded-[20px] min-h-[400px]"
              >
                <div className="flex justify-center items-center ">
                  <EmptyRefundState
                    initiateModal
                    title="No refund Made"
                    subtitle="Customer does not have any Transaction History"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default CardDetail;
