import outgoing from "@/assets/images/outgoing.png";
import incoming from "@/assets/images/incoming.png";
import { CardSearchIcon } from "@/assets/svgComp/CardGroupIcons";
import SearchInputComp from "../input/SearchInputComp";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RowTable } from "./RowTable";

export type SampleDataItem = {
  id: number;
  amount: number;
  reference: string;
  description: string;
  date: string;
};

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

const RecentTransaction = () => {
  return (
    <div>
      <main className="bg-shadeBackground rounded-[20px] h-[77px] mb-5 w-full flex items-center gap-[50px] p-4">
        <div className="">
          <h6 className="text-blueGray text-xs mb-2">Successful</h6>
          <h6 className=" text-xs">
            1/<span className="text-blueGray">2</span>
          </h6>
        </div>
        <aside className="flex items-center gap-4 bg-white rounded-[10px] h-[61px] p-2 shadow-custom">
          <div>
            <img src={incoming} alt="incoming" className="w-[30px] h-[30px]" />
          </div>
          <div>
            <h6 className="text-blueGray text-sm">Incoming</h6>
            <h6 className=" text-sm font-semibold">NGN9,450.00</h6>
          </div>
        </aside>
        <aside className="flex items-center gap-4 bg-white rounded-[10px] h-[61px] p-2 shadow-custom">
          <div>
            <img src={outgoing} alt="outgoing" className="w-[30px] h-[30px]" />
          </div>
          <div>
            <h6 className="text-blueGray text-sm">Outgoing</h6>
            <h6 className=" text-sm font-semibold">NGN1,200.00</h6>
          </div>
        </aside>
      </main>

      <section className="bg-shadeBackground rounded-[20px] mb-5 w-full p-6">
        <p className="font-semibold">Recent Transactions</p>
        <section className="my-4 ">
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
                  className="w-[75px] rounded-[10px] font-bold text-sm text-blowText bg-white border border-borderOutline"
                >
                  <SelectValue placeholder="Filter" />
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
          <div className="overflow-x-auto scrollableCSS">
            {sampleData.map((item, index) => (
              <RowTable item={item} index={index} />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default RecentTransaction;
