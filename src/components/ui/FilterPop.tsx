import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputField from "../input/InputField";

const FilterPop = () => {
  return (
    <div>
      <p className="text-blueGray text-xs">Filter by:</p>
      <Select>
        <SelectTrigger
          label="Status"
          dropDown
          labelClassName="bg-white"
          className="w-full rounded-[30px] font-normal text-sm text-blowText bg-blowBG border-none my-2"
        >
          <SelectValue placeholder="Show All" />
        </SelectTrigger>
        <SelectContent className="text-sm">
          <SelectGroup>
            <SelectLabel className="text-xs text-blueGray">
              Show all
            </SelectLabel>
            <SelectItem value="successful">Successful</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
            <SelectItem value="abandoned">Abandoned</SelectItem>
            <SelectItem value="reversed">Reversed</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger
          label="Channel"
          dropDown
          labelClassName="bg-white"
          className="w-full rounded-[30px] font-normal text-sm text-blowText bg-blowBG border-none my-2"
        >
          <SelectValue placeholder="Show All" />
        </SelectTrigger>
        <SelectContent className="text-sm">
          <SelectGroup>
            <SelectLabel className="text-xs text-blueGray">
              Show all
            </SelectLabel>
            <SelectItem value="Debit">Direct Debit</SelectItem>
            <SelectItem value="USSD">USSD</SelectItem>
            <SelectItem value="QR">QR</SelectItem>
            <SelectItem value="Transfer">Bank Transfer</SelectItem>
            <SelectItem value="Airtime">Airtime</SelectItem>
            <SelectItem value="Data">Data</SelectItem>
            <SelectItem value="Electricity">Electricity</SelectItem>
            <SelectItem value="Cable">Cable TV</SelectItem>
            <SelectItem value="Flight">Flight</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <InputField
        name="amount"
        placeholder="Transaction Amount"
        label="Amount"
      />
      <InputField
        name="receipt"
        placeholder="Transaction Amount"
        label="Receipt Number"
      />
      <InputField
        name="customer"
        placeholder="Transaction Amount"
        label="Customer ID/Email"
      />
      <aside className="flex items-center justify-between text-xs my-2">
        <p className="text-disabledText">Reset</p>
        <p className="text-blowSecondary">Apply</p>
      </aside>
    </div>
  );
};

export default FilterPop;
