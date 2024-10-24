// src/components/DateRangeDropdown.tsx

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DateRange, Range } from "react-date-range";
import { DropDownIcon } from "@/assets/svgComp/CardGroupIcons";

interface DateRangeDropdownProps {
  range: Range[];
  setRange: React.Dispatch<React.SetStateAction<Range[]>>;
  onApply: (range: Range[]) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DateRangeDropdown: React.FC<DateRangeDropdownProps> = ({
  range,
  setRange,
  onApply,
  setIsOpen,
  isOpen,
}) => {
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="w-fit rounded-[10px] text-blowText focus:outline-none font-bold flex gap-2 items-center justify-between px-2 py-2 text-sm bg-white border border-borderOutline">
        <p className="mr-2 text-xs text-mediumGray px-2 py-1 w-fit bg-blowBG rounded-[16px]">
          Date
        </p>
        <h4 className="text-nowrap">Select Date</h4>
        <DropDownIcon />
      </DropdownMenuTrigger>

      {/* Modal Content */}
      <DropdownMenuContent className="rounded-[10px] pb-4">
        {/* Date Range Picker */}
        <div className="mt-4">
          <DateRange
            className="date-range-custom"
            editableDateInputs={true}
            onChange={(item) => setRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={range}
            rangeColors={["#FF114A"]}
          />
        </div>

        <div className="mt-20 flex justify-center space-x-4">
          <button
            onClick={() => {
              console.log("Cancel");
              setIsOpen(false);
            }}
            className="px-4 py-2 border border-disabledText rounded-[8px] text-blowText hover:bg-gray-100 h-[40px]"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              console.log("Apply", range);
              onApply(range); // Call the onApply callback
            }}
            className="px-4 py-2 bg-blowSecondary text-white rounded-[8px] hover:bg-primary-dark h-[40px]"
          >
            Apply
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DateRangeDropdown;
