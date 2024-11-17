import InputField from "@/components/input/InputField";
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

const TeamInvite = () => {
  return (
    <div>
      <div>
        <p className="text-[14px] font-semibold text-blowText">Email</p>
        <InputField placeholder="you@email.com" name="email" type="email" />
      </div>
      <Select>
        <p className="text-[14px] font-semibold text-blowText">Choose Role</p>
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
        Invite Team member
      </Button>
    </div>
  );
};

export default TeamInvite;
