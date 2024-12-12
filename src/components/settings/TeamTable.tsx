import TableComp from "../table/TableComp";
// import Pagination from "../table/Pagination";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type DataItem = {
  id: number;
  email: string;
  fullName: string;
  role: string;
  status: string;
  date: string;
};

const sampleData: DataItem[] = [
  {
    id: 1,
    fullName: "Jonah Ani Nonso",
    email: "jonasajoku@gmail.com",
    role: "Admin",
    status: "Disabled",
    date: "July 8, 2024 12:53 PM",
  },
  {
    id: 1,
    fullName: "Jonah Ani Nonso",
    email: "jonasajoku@gmail.com",
    role: "Admin",
    status: "Disabled",
    date: "July 8, 2024 12:53 PM",
  },
];

const headers = [
  { content: <> Name</> },
  { content: <>Email Address</> },
  { content: <>Role</> },
  { content: <>2FA Status </> },
  { content: <>Date </> },
  { content: <>Action </> },
];

const TeamTable = () => {
  const navigate = useNavigate();
  const renderRow = (item: DataItem, index: number) => {
    const rowClass = index % 2 === 0 ? "bg-blowBG" : "bg-white";

    const handleRowClick = () => {
      navigate(`/customers/${item.id}`, { state: { data: item } });
    };
    return (
      <tr
        key={index}
        onClick={handleRowClick}
        className={`w-full text-[12px] text-nowrap text-left font-medium text-tableText h-[70px] cursor-pointer hover:bg-blueGray ${rowClass}`}
      >
        <td className="py-1 px-4 ">{item.fullName}</td>
        <td className="py-1 px-4">{item?.email}</td>
        <td className="py-1 px-4 ">{item.role}</td>

        <td className="py-1 px-4">
          <span className="flex items-center gap-2 ">
            <div className={`h-[10px] w-[10px] rounded-full bg-disabledText`} />
            {item?.status}
          </span>
        </td>

        <td className="py-1 px-4 ">{item.date}</td>
        <td className="py-1 px-4 text-blowSecondary ">
          <span className="flex gap-1">
            <Dialog>
              <DialogTrigger
                className="w-full"
                onClick={(e) => e.stopPropagation()}
              >
                Change Role.
              </DialogTrigger>
              <DialogContent
                onClick={(e) => e.stopPropagation()}
                className="bg-white !rounded-[30px] overflow-y-scroll scrollbar-hidden h-[50vh]"
              >
                <DialogDescription>
                  <h4 className="text-lg font-semibold text-blowText text-center mt-9 mb-4">
                    Editing Role
                  </h4>
                  <p>
                    Set <span className="font-bold">{item?.email}'s </span>
                    role to
                  </p>
                  <Select>
                    <p className="my-2 text-[14px] font-semibold text-blowText">
                      New Role
                    </p>
                    <SelectTrigger
                      dropDown
                      className="w-full rounded-[10px] h-[50px] mb-4 mt-1 font-normal text-sm text-blowText placeholder:text-placeHolderText bg-white border border-borderOutline"
                    >
                      <SelectValue placeholder="Select Role" />
                    </SelectTrigger>
                    <SelectContent className="text-sm">
                      <SelectGroup>
                        <SelectLabel className="border-b border-lightGray">
                          Role
                        </SelectLabel>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <Button className="bg-blowText text-white text-sm cursor-pointer font-normal h-[50px] w-full rounded-[20px] my-4">
                    Save
                  </Button>
                </DialogDescription>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger
                className="w-full"
                onClick={(e) => e.stopPropagation()}
              >
                Remove
              </DialogTrigger>
              <DialogContent
                onClick={(e) => e.stopPropagation()}
                className="bg-white !rounded-[30px] overflow-y-scroll scrollbar-hidden h-[40vh]"
              >
                <DialogDescription>
                  <h4 className="text-lg font-semibold text-blowText text-center mt-9 mb-4">
                    Remove Team Member
                  </h4>
                  <p>
                    By doing this,{" "}
                    <span className="font-bold">{item?.fullName} </span> will no
                    longer be able to access this business anymore. Do you want
                    to contiue?
                  </p>

                  <Button className="bg-blowText text-white text-sm cursor-pointer font-normal h-[50px] w-full rounded-[20px] my-4">
                    Yes, Remove
                  </Button>
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </span>
        </td>
      </tr>
    );
  };

  return (
    <section>
      <div className="my-3">
        <TableComp headers={headers} data={sampleData} renderRow={renderRow} />
      </div>
      <div>
        {/* <Pagination /> */}
      </div>
    </section>
  );
};

export default TeamTable;
