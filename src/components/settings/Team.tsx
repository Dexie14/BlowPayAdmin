import { CardSearchIcon, FilterIcon } from "@/assets/svgComp/CardGroupIcons";
import SearchInputComp from "../input/SearchInputComp";
import Container from "../layout/Container";
import PageLayout from "../layout/PageLayout";
import { Button } from "../ui/button";
import PageTitle from "../ui/PageTitle";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import TeamTable from "./TeamTable";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AddIcon,
  EnforceIcon,
  RolesettingIcon,
} from "@/assets/svgComp/General";
import SettingFilter from "./SettingFilter";
import TeamInvite from "./TeamInvite";

const Team = () => {
  return (
    <div>
      <Container>
        <PageTitle
          title="Team"
          subTitle="You can Manage all your Team members here"
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
              <Popover>
                <PopoverTrigger className="flex gap-2 items-center px-2 py-2 justify-between w-[90px] rounded-[10px] font-bold text-sm text-blowText bg-white border border-borderOutline">
                  <FilterIcon />
                  Filters
                </PopoverTrigger>
                <PopoverContent className="rounded-[12px] w-[250px]">
                  <SettingFilter />
                </PopoverContent>
              </Popover>
              <Dialog>
                <DialogTrigger className="w-full">
                  <Button className="border border-[#DCDCE4] bg-blowBG rounded-[10px] text-xs text-blowText">
                    <div className="mr-2">
                      <EnforceIcon />
                    </div>
                    Enforce 2FA
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white !rounded-[30px] overflow-y-scroll scrollbar-hidden h-[40vh]">
                  <DialogDescription>
                    <h4 className="text-lg font-semibold text-blowText text-center mt-9 mb-4">
                      Enable 2FA
                    </h4>
                    <p className="text-blueGray text-center w-11/12 mx-auto">
                      You currently do not have 2FA enabled on your account.
                      Enable 2FA now to continue
                    </p>
                    <Button className="bg-blowText text-white text-sm cursor-pointer font-normal h-[50px] w-full rounded-[20px] my-4">
                      Enable 2FA
                    </Button>
                  </DialogDescription>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger className="w-full">
                  <Button className="border border-[#DCDCE4] bg-blowBG rounded-[10px] text-xs text-blowText">
                    <div className="mr-2 ">
                      <RolesettingIcon />
                    </div>
                    Manage Roles
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white !rounded-[30px] overflow-y-scroll scrollbar-hidden h-[70vh]">
                  <DialogDescription>
                    <h4 className="text-lg font-semibold text-blowText text-center mt-9 mb-4">
                      Manage Role
                    </h4>
                  </DialogDescription>
                  {/* <TeamInvite /> */}
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger className="w-full">
                  <Button className="bg-blowSecondary text-white text-xs font-bold w-[132px] h-[45px] hover:text-white rounded-[10px]">
                    <div className="mr-1">
                      <AddIcon />
                    </div>
                    Invite Someone
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white !rounded-[30px] overflow-y-scroll scrollbar-hidden h-[70vh]">
                  <DialogDescription>
                    <h4 className="text-lg font-semibold text-blowText text-center mt-9 mb-4">
                      Invite Team Member
                    </h4>
                    <TeamInvite />
                  </DialogDescription>
                </DialogContent>
              </Dialog>
            </aside>
          </div>
          <TeamTable />
        </PageLayout>
      </Container>
    </div>
  );
};

export default Team;
