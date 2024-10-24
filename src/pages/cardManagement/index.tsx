import { CardSearchIcon } from "@/assets/svgComp/CardGroupIcons";
import { CardMgtIcon } from "@/assets/svgComp/SidebarIcons";
import CardTable from "@/components/cardMgt/CardTable";
import TopCard from "@/components/dashboard/TopCard";
import SearchInputComp from "@/components/input/SearchInputComp";
import Container from "@/components/layout/Container";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
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

const CardMgt = () => {
  return (
    <div>
      <TopCard
        text="Card Management"
        icon={<CardMgtIcon />}
        className="w-fit"
      />
      <Container>
        <PageTitle
          title="Card Management"
          subTitle="Gives a detailed overview on the List of Users in the system and their
          respective KYC"
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
                  label="Card Type"
                  dropDown
                  className="w-fit rounded-[10px] font-bold text-sm text-blowText bg-white border border-borderOutline"
                >
                  <SelectValue placeholder="Select Card" />
                </SelectTrigger>
                <SelectContent className="text-sm">
                  <SelectGroup>
                    <SelectLabel className="border-b border-lightGray">
                      Card Type
                    </SelectLabel>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="visa">Visa</SelectItem>
                    <SelectItem value="master">Master Card</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger
                  label="Date"
                  dropDown
                  className="w-fit rounded-[10px] font-bold text-sm text-blowText bg-white border border-borderOutline"
                >
                  <SelectValue placeholder="Select Date" />
                </SelectTrigger>
                <SelectContent className="text-sm">
                  <SelectGroup>
                    <SelectLabel className="border-b border-lightGray">
                      Card Type
                    </SelectLabel>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="visa">Visa</SelectItem>
                    <SelectItem value="master">Master Card</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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
          <CardTable />
        </PageLayout>
      </Container>
    </div>
  );
};

export default CardMgt;
