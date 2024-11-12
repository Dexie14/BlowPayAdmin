// import EmptyRefundState from "../cardMgt/EmptyRefundState";
import { CardSearchIcon } from "@/assets/svgComp/CardGroupIcons";
import SearchInputComp from "../input/SearchInputComp";
import TransactionStatus from "../transaction/TransactionStatus";

// import emptyCard from "@/assets/images/emptyCard.png";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SampleDataItem } from "../transaction/RecentTransaction";
import { VirtualRowTable } from "./VirtualRowTable";

const sampleData: SampleDataItem[] = [
  {
    id: 1,
    amount: 30558.39,
    reference: "Blowmoney/rhhjer2",
    description: "Airtime Purchase",
    date: "Wednesday, July 8, 2024 12:53 PM",
  },
  {
    id: 2,
    amount: 30558.39,
    reference: "Blowmoney/rhhjerl-133221212",
    description: "Flight Booking",
    date: "Wednesday, July 8, 2024 12:53 PM",
  },
];

const VirtualCard = () => {
  return (
    <div>
      <TransactionStatus />
      <section className="bg-shadeBackground rounded-[20px] mb-5 w-full p-6">
        <h4 className=" font-semibold mb-3 text-sm">Virtual Card</h4>
        <div className="flex items-center justify-between w-full">
          <div className="w-[50%]">
            <SearchInputComp
              icon={<CardSearchIcon />}
              className="bg-white rounded-[50px] h-[57px] w-full"
              placeholder="Search Users"
              inputClassName="!placeholder-disabledText"
            />
          </div>
          <aside className="flex items-center gap-3 ">
            <Select>
              <SelectTrigger
                filter
                className="w-[80px] rounded-[10px] font-bold text-sm text-blowText bg-white border border-borderOutline"
              >
                <SelectValue placeholder="Filters" />
              </SelectTrigger>
              <SelectContent className="text-sm">
                <SelectGroup>
                  <SelectLabel className="border-b border-lightGray">
                    Filter By
                  </SelectLabel>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </aside>
        </div>
        <main>
          <div className="overflow-x-auto scrollableCSS">
            {sampleData.map((item, index) => (
              <VirtualRowTable item={item} index={index} />
            ))}
          </div>
        </main>
        {/* <div className="flex  my-4 justify-center items-center ">
          <EmptyRefundState
            title="No Virtual Wallet"
            subtitle="Customer does not have any Wallet"
            image={emptyCard}
          />
        </div> */}
      </section>
    </div>
  );
};

export default VirtualCard;
