import { CardSearchIcon } from "@/assets/svgComp/CardGroupIcons";
import { TransIcon } from "@/assets/svgComp/SidebarIcons";

import TopCard from "@/components/dashboard/TopCard";
import SearchInputComp from "@/components/input/SearchInputComp";
import Container from "@/components/layout/Container";
import PageLayout from "@/components/layout/PageLayout";
import TransTable from "@/components/transaction/TransTable";
import { Button } from "@/components/ui/button";
import DateRangeDropdown from "@/components/ui/DateRange";

import PageTitle from "@/components/ui/PageTitle";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

import { Range } from "react-date-range";

const TransHistory = () => {
  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleApply = (appliedRange: Range[]) => {
    console.log("Selected Date Range:", appliedRange);
    setDropdownOpen(false);
  };

  return (
    <div>
      <TopCard text="Transactions" icon={<TransIcon />} className="w-fit" />
      <Container>
        <PageTitle
          title="Transactions"
          subTitle="Gives a detailed overview on the List of Users in the system and htheir respective KYC"
        />
        <PageLayout>
          <div className="flex items-center justify-between w-full">
            <div className="w-[30%]">
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
                  label="User"
                  dropDown
                  className="w-fit rounded-[10px] font-bold text-sm text-blowText bg-white border border-borderOutline"
                >
                  <SelectValue placeholder="Select App" />
                </SelectTrigger>
                <SelectContent className="text-sm">
                  <SelectGroup>
                    <SelectLabel className="border-b border-lightGray">
                      User
                    </SelectLabel>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="visa">Blow Pay</SelectItem>
                    <SelectItem value="master">Blow Money</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <DateRangeDropdown
                range={state}
                setRange={setState}
                onApply={handleApply}
                isOpen={isDropdownOpen} 
                setIsOpen={setDropdownOpen}
              />

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
              <Button className="border border-borderOutline bg-white rounded-[10px] text-sm text-blowText">
                Export CSV
              </Button>
            </aside>
          </div>
          <TransTable />
        </PageLayout>
      </Container>
    </div>
  );
};

export default TransHistory;
