import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import InputField from "@/components/input/InputField";
import PhoneInput from "react-phone-number-input";
import { Button } from "../ui/button";
import { useState } from "react";

const AddCustomer = () => {
  const [value, setValue] = useState<string>();

  return (
    <div>
      {" "}
      <Select>
        <p className="text-[14px] font-semibold text-blowText">App</p>
        <SelectTrigger
          dropDown
          className="w-full rounded-[10px] h-[50px] mb-4 mt-1 font-normal text-sm text-blowText placeholder:text-placeHolderText bg-white border border-borderOutline"
        >
          <SelectValue placeholder="Select Application" />
        </SelectTrigger>
        <SelectContent className="text-sm">
          <SelectGroup>
            <SelectLabel className="border-b border-lightGray">
              User
            </SelectLabel>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="visa">Blow Pay</SelectItem>
            <SelectItem value="master">Blow Money</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div>
        <p className="text-[14px] font-semibold text-blowText">
          Customer Email
        </p>
        <InputField
          //   onChange={(e) => setfirst(e.target.value)}

          placeholder="you@email.com"
          name="email"
          type="email"
        />
      </div>
      <div>
        <p className="text-[14px] font-semibold text-blowText">
          Customer Surname
        </p>
        <InputField placeholder="Legal Surname " name="surname" type="text" />
      </div>
      <div>
        <p className="text-[14px] font-semibold text-blowText">
          Customer Last Name
        </p>
        <InputField placeholder="Legal Lastname " name="lastname" type="text" />
      </div>
      <div className="phoneInput">
        <p className="text-[14px] font-semibold text-blowText">Phone Number</p>
        <PhoneInput
          defaultCountry="NG"
          placeholder="Enter phone number"
          className="w-full rounded-[10px] h-[50px] px-3 shadow-sm  mb-4 mt-1 font-normal text-sm text-blowText placeholder:text-placeHolderText bg-white border border-inputBorder"
          value={value}
          onChange={setValue}
        />
      </div>
      <Button className="bg-blowText text-white text-sm cursor-pointer font-normal h-[50px] w-full rounded-[20px] my-4">
        Add customer
      </Button>
    </div>
  );
};

export default AddCustomer;
