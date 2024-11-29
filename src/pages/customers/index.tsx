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
import { AddIcon } from "@/assets/svgComp/General";
import CustomerTable from "@/components/customer/CustomerTable";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddCustomer from "@/components/customer/AddCustomer";
import { customerApi } from "@/hooks/api/crud/customer";
// import { useState } from "react";

const Customer = () => {
  //  const [first, setfirst] = useState("")

  // console.log(first, "value");

  const { GetAllCustomers } = customerApi();
  const { data: allCustomers, isFetching } = GetAllCustomers();

  console.log(allCustomers);

  return (
    <div>
      <TopCard text="Customers" icon={<CustomerIcon />} className="w-fit" />
      <Container>
        <PageTitle
          title="Customers - 2,102"
          subTitle="Gives a detailed overview on the List of Users in the system"
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
              <Dialog>
                <DialogTrigger className="w-full">
                  <Button className="bg-blowSecondary text-white text-xs font-bold w-[132px] h-[45px] hover:text-white rounded-[10px]">
                    <div className="mr-1">
                      <AddIcon />
                    </div>
                    Add Customer
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white !rounded-[30px] overflow-y-scroll scrollbar-hidden h-[80vh]">
                  <DialogDescription>
                    <h4 className="text-lg font-semibold text-blowText text-center mt-9 mb-4">
                      Add New Customer
                    </h4>
                    <AddCustomer />
                  </DialogDescription>
                </DialogContent>
              </Dialog>

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

          {isFetching ? (
            <div>
              <p className="text-center">Loading...</p>
            </div>
          ) : (
            <CustomerTable allCustomerData={allCustomers?.data ?? []} />
          )}
        </PageLayout>
      </Container>
    </div>
  );
};

export default Customer;
