import { EditIcon, ResetIcon } from "@/assets/svgComp/General";
import InputField from "../input/InputField";
import Nepabill from "@/assets/images/Nepabill.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Tier3 = () => {
  return (
    <section>
      <div className="flex w-full gap-12 items-center">
        <div className="w-8/12">
          <Select>
            <p className="text-[14px] font-semibold text-blowText">Country</p>
            <SelectTrigger
              dropDown
              className="w-full rounded-[10px] h-[50px] mb-4 mt-1 font-normal text-sm text-blowText placeholder:text-placeHolderText bg-white border border-borderOutline"
            >
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent className="text-sm ">
              <SelectGroup>
                <SelectLabel className="border-b border-lightGray">
                  Country
                </SelectLabel>
                <SelectItem value="Nigeria">Nigeria</SelectItem>
                <SelectItem value="USA">USA</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <aside className="flex gap-2 items-center">
          <EditIcon />
          <ResetIcon />
        </aside>
      </div>
      <div className="flex w-full gap-12 items-center">
        <div className="w-8/12">
          <Select>
            <p className="text-[14px] font-semibold text-blowText">State</p>
            <SelectTrigger
              dropDown
              className="w-full rounded-[10px] h-[50px] mb-4 mt-1 font-normal text-sm text-blowText placeholder:text-placeHolderText bg-white border border-borderOutline"
            >
              <SelectValue placeholder="Select State" />
            </SelectTrigger>
            <SelectContent className="text-sm ">
              <SelectGroup>
                <SelectLabel className="border-b border-lightGray">
                  State
                </SelectLabel>
                <SelectItem value="Abuja">Abuja</SelectItem>
                <SelectItem value="Ogun">Ogun</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <aside className="flex gap-2 items-center">
          <EditIcon />
          <ResetIcon />
        </aside>
      </div>
      <div className="flex w-full gap-12 items-center">
        <div className="w-8/12">
          <Select>
            <p className="text-[14px] font-semibold text-blowText">
              Local Government Area
            </p>
            <SelectTrigger
              dropDown
              className="w-full rounded-[10px] h-[50px] mb-4 mt-1 font-normal text-sm text-blowText placeholder:text-placeHolderText bg-white border border-borderOutline"
            >
              <SelectValue placeholder="Select Local Government" />
            </SelectTrigger>
            <SelectContent className="text-sm ">
              <SelectGroup>
                <SelectLabel className="border-b border-lightGray">
                  Local Government Area
                </SelectLabel>
                <SelectItem value="Bwari">Bwari</SelectItem>
                <SelectItem value="USA">USA</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <aside className="flex gap-2 items-center">
          <EditIcon />
          <ResetIcon />
        </aside>
      </div>

      <div className="flex w-full gap-12 items-center">
        <InputField
          className="w-8/12"
          label="Address"
          placeholder="Enter your detailed Address"
          name="address"
          type="text"
        />
        <aside className="flex gap-2 items-center">
          <EditIcon />
          <ResetIcon />
        </aside>
      </div>
      <div className="flex gap-12 items-center">
        <InputField
          className="w-8/12"
          label="House Number"
          placeholder="House Number"
          name="house"
          type="text"
        />
      </div>
      <section>
        <div className="flex  gap-12 items-center">
          <InputField
            className="w-8/12"
            label="Landmark (Optional)"
            placeholder="Select Landmark close to your address"
            name="landmark"
            type="text"
          />
        </div>
        <p className="text-sm text-blueGray">
          Landmarks could be schools, supermarkets, popular places around your
          address.
        </p>
      </section>
      <section className="flex gap-5 my-10">
        <div className="w-[35%]">
          <h3 className="font-semibold text-lg">Proof of address</h3>
          <aside className="space-y-5 mt-4">
            <div>
              <p className="text-disabledText text-xs">Document</p>
              <h6 className="font-bold text-sm">NEPA Bill</h6>
            </div>
          </aside>
        </div>
        <div className="w-[60%]">
          <aside>
            <h3 className="font-semibold text-lg">Front</h3>
            <img src={Nepabill} alt="document" />
          </aside>

          <div className="flex items-center gap-4 justify-center">
            <p className="text-blowSecondary">Approve</p>
            <p>Reject</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Tier3;
