import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SettingFilter = () => {
  return (
    <div>
      <p className="text-blueGray text-xs">Filter by:</p>
      <Select>
        <SelectTrigger
          label="2FA"
          dropDown
          labelClassName="bg-white"
          className="w-full rounded-[30px] font-normal text-sm text-blowText bg-blowBG border-none my-2"
        >
          <SelectValue placeholder="Show All" />
        </SelectTrigger>
        <SelectContent className="text-sm">
          <SelectGroup>
            <SelectLabel className="text-xs text-blueGray">2FA</SelectLabel>
            <SelectItem value="enable">Enabled</SelectItem>
            <SelectItem value="disable">Disabled</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger
          label="Role"
          dropDown
          labelClassName="bg-white"
          className="w-full rounded-[30px] font-normal text-sm text-blowText bg-blowBG border-none my-2"
        >
          <SelectValue placeholder="Show All" />
        </SelectTrigger>
        <SelectContent className="text-sm">
          <SelectGroup>
            <SelectLabel className="text-xs text-blueGray">Role</SelectLabel>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="operations">Operations</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <aside className="flex items-center justify-between text-xs my-2">
        <p className="text-disabledText">Reset</p>
        <p className="text-blowSecondary">Apply</p>
      </aside>
    </div>
  );
};

export default SettingFilter;
