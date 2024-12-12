import { CardSearchIcon, FilterIcon } from "@/assets/svgComp/CardGroupIcons";
import { CardMgtIcon } from "@/assets/svgComp/SidebarIcons";

import TopCard from "@/components/dashboard/TopCard";
import SearchInputComp from "@/components/input/SearchInputComp";
import Container from "@/components/layout/Container";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import DateRangeDropdown from "@/components/ui/DateRange";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
import FilterPop from "@/components/ui/FilterPop";
import WalletTable from "@/components/wallet/walletTable";
import { virtualWalletApi } from "@/hooks/api/crud/virtualWallet";

const WalletPage = () => {
  const { GetAllVirtualWallet } = virtualWalletApi();
  const { data: allVirtualAccount, isPending } = GetAllVirtualWallet();

  // console.log(allVirtualAccount);

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
      <TopCard text="Virtual Wallet" icon={<CardMgtIcon />} className="w-fit" />
      <Container>
        <PageTitle
          title="Virtual Wallet"
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
                  label="Wallet Type"
                  dropDown
                  labelClassName="text-nowrap"
                  className="w-fit rounded-[10px] font-bold text-sm text-blowText bg-white border border-borderOutline"
                >
                  <SelectValue placeholder="Select Wallet" />
                </SelectTrigger>
                <SelectContent className="text-sm">
                  <SelectGroup>
                    <SelectLabel className="border-b border-lightGray">
                      Wallet Type
                    </SelectLabel>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="NGN">Nigerian Naira (NGN)</SelectItem>
                    <SelectItem value="USD">United State (USD)</SelectItem>
                    <SelectItem value="XAF">CFA Franc (XAF)</SelectItem>
                    <SelectItem value="KES">Kenyan Shilling (KES)</SelectItem>
                    <SelectItem value="GHS">Ghanaian Cedi (GHS)</SelectItem>
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

              <Popover>
                <PopoverTrigger className="flex gap-2 items-center px-2 py-2 justify-between w-[90px] rounded-[10px] font-bold text-sm text-blowText bg-white border border-borderOutline">
                  <FilterIcon />
                  Filters
                </PopoverTrigger>
                <PopoverContent className="rounded-[12px] w-[250px]">
                  <FilterPop />
                </PopoverContent>
              </Popover>

              <Button className="border border-borderOutline bg-white rounded-[10px] text-sm text-blowText">
                Export CSV
              </Button>
            </aside>
          </div>
          {isPending ? (
            <div>
              <p className="text-center">Loading...</p>
            </div>
          ) : (
            <WalletTable allVirtualAccount={allVirtualAccount?.data ?? []} />
          )}
        </PageLayout>
      </Container>
    </div>
  );
};

export default WalletPage;
