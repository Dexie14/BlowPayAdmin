import { CardSearchIcon, FilterIcon } from "@/assets/svgComp/CardGroupIcons";
import { CustomerIcon } from "@/assets/svgComp/SidebarIcons";

import TopCard from "@/components/dashboard/TopCard";
import SearchInputComp from "@/components/input/SearchInputComp";
import Container from "@/components/layout/Container";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import PageTitle from "@/components/ui/PageTitle";

import FilterPop from "@/components/ui/FilterPop";
import KycTable from "@/components/KYC/KycTable";

const Kyc = () => {
  return (
    <div>
      <TopCard
        text="KYC Management"
        icon={<CustomerIcon />}
        className="w-fit"
      />
      <Container>
        <PageTitle
          title="KYC Management"
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
              <Button className="border border-borderOutline bg-white rounded-[10px] text-sm text-blowText">
                Export CSV
              </Button>
              <Popover>
                <PopoverTrigger className="flex gap-2 items-center px-2 py-2 justify-between w-[90px] rounded-[10px] font-bold text-sm text-blowText bg-white border border-borderOutline">
                  <FilterIcon />
                  Filters
                </PopoverTrigger>
                <PopoverContent className="rounded-[12px] w-[250px]">
                  <FilterPop />
                </PopoverContent>
              </Popover>
            </aside>
          </div>
          <KycTable />
        </PageLayout>
      </Container>
    </div>
  );
};

export default Kyc;
