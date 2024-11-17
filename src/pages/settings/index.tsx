import { SettingIcon } from "@/assets/svgComp/SidebarIcons";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import TopCard from "@/components/dashboard/TopCard";
import Container from "@/components/layout/Container";
import Profile from "@/components/settings/Profile";
import Contact from "@/components/settings/Contact";
import Preferences from "@/components/settings/Preferences";
import ApiChanges from "@/components/settings/ApiChanges";
import Team from "@/components/settings/Team";

const Settings = () => {
  return (
    <div>
      <TopCard text="Settings" icon={<SettingIcon />} />

      <Container className=" py-7 px-4">
        <Tabs defaultValue="profile" className="">
          <TabsList className=" flex justify-between border-b-2 pb-2 h-auto border-[#E5E4E4] bg-transparent px-2 w-[97%]">
            <div className="flex gap-x-5">
              <TabsTrigger
                className="data-[state=active]:bg-fadedblowSecondary data-[state=active]:text-blowSecondary  data-[state=active]:shadow-custom h-[38px] w-[100px] data-[state=active]:rounded-[10px] text-blueGray text-xs font-bold"
                value="profile"
              >
                Profile
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-fadedblowSecondary  data-[state=active]:text-blowSecondary  data-[state=active]:shadow-custom h-[38px] w-[100px] data-[state=active]:rounded-[10px] text-blueGray text-xs font-bold"
                value="contact"
              >
                Contact
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-fadedblowSecondary  data-[state=active]:text-blowSecondary  data-[state=active]:shadow-custom h-[38px] w-[100px] data-[state=active]:rounded-[10px] text-blueGray text-xs font-bold"
                value="preference"
              >
                Preferences
              </TabsTrigger>

              <TabsTrigger
                className="data-[state=active]:bg-fadedblowSecondary  data-[state=active]:text-blowSecondary  data-[state=active]:shadow-custom h-[38px] w-[100px] data-[state=active]:rounded-[10px] text-blueGray text-xs font-bold"
                value="team"
              >
                Team
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-fadedblowSecondary  data-[state=active]:text-blowSecondary  data-[state=active]:shadow-custom h-[38px] w- data-[state=active]:rounded-[10px] text-blueGray text-xs font-bold"
                value="api"
              >
                API Keys & Webhooks
              </TabsTrigger>
            </div>
          </TabsList>
          <TabsContent value="profile" className="">
            <Profile />
          </TabsContent>
          <TabsContent value="contact" className="">
            <Contact />
          </TabsContent>
          <TabsContent value="preference" className="">
            <Preferences />
          </TabsContent>
          <TabsContent value="api" className="">
            <ApiChanges />
          </TabsContent>
          <TabsContent value="team" className="">
            <Team />
          </TabsContent>
        </Tabs>
      </Container>
    </div>
  );
};

export default Settings;
