import { DashboardIcon } from "@/assets/svgComp/SidebarIcons";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TopCard from "@/components/dashboard/TopCard";
import DashboardContent from "@/components/dashboard/DashboardContent";
import Container from "@/components/layout/Container";
import { useAuthStore } from "@/store/authStore";

const Dashboard = () => {
  const { currentUser } = useAuthStore();

  console.log(currentUser, "currentUser");
  return (
    <div>
      <TopCard text="Dashboard" icon={<DashboardIcon />} />

      <Container className=" py-7 px-4">
        <Tabs defaultValue="days" className="">
          <TabsList className=" flex justify-between border-b-2 pb-2 h-auto border-[#E5E4E4] bg-transparent px-2 w-[97%]">
            <div className="flex gap-x-5">
              <TabsTrigger
                className="data-[state=active]:bg-white  data-[state=active]:shadow-custom h-[38px] w-[100px] data-[state=active]:rounded-[10px] text-blueGray text-xs font-bold"
                value="days"
              >
                Last 7 Days
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-white  data-[state=active]:shadow-custom h-[38px] w-[100px] data-[state=active]:rounded-[10px] text-blueGray text-xs font-bold"
                value="month"
              >
                Months
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-white  data-[state=active]:shadow-custom h-[38px] w-[100px] data-[state=active]:rounded-[10px] text-blueGray text-xs font-bold"
                value="year"
              >
                Years
              </TabsTrigger>
            </div>
            <Select>
              <SelectTrigger className="w-[160px] rounded-[10px] font-bold text-sm text-blowText bg-white border-none shadow-custom">
                <SelectValue placeholder="Blow Money" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Blow Money</SelectLabel>
                  <SelectItem value="money">Blow Money</SelectItem>
                  <SelectItem value="res">Blow Money</SelectItem>
                  <SelectItem value="pay">Blow Pay</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </TabsList>
          <TabsContent value="days" className="">
            <DashboardContent />
          </TabsContent>
          <TabsContent value="month" className="">
            <DashboardContent />
          </TabsContent>
          <TabsContent value="year" className="">
            <DashboardContent />
          </TabsContent>
        </Tabs>
      </Container>
    </div>
  );
};

export default Dashboard;
