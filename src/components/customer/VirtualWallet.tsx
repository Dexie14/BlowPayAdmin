// import EmptyRefundState from "../cardMgt/EmptyRefundState";
// import { CardSearchIcon } from "@/assets/svgComp/CardGroupIcons";
// import SearchInputComp from "../input/SearchInputComp";
import TransactionStatus from "../transaction/TransactionStatus";

import ngn from "@/assets/images/ngn.png";
import usa from "@/assets/images/usa.png";
import { CopyIcon } from "@/assets/svgComp/CardGroupIcons";
import { QRCodeSVG } from "qrcode.react";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

const VirtualWallet = () => {
  return (
    <div>
      <TransactionStatus />
      <section className="bg-shadeBackground rounded-[20px] mb-5 w-full p-6">
        <h4 className=" font-semibold mb-3 text-sm">Virtual Wallets</h4>
        {/* <div className="flex items-center justify-between w-full">
          <div className="w-[50%]">
            <SearchInputComp
              icon={<CardSearchIcon />}
              className="bg-white rounded-[50px] h-[57px] w-full"
              placeholder="Search Users"
              inputClassName="!placeholder-disabledText"
            />
          </div>
          <aside className="flex items-center gap-3 ">
            <Select>
              <SelectTrigger
                filter
                className="w-[80px] rounded-[10px] font-bold text-sm text-blowText bg-white border border-borderOutline"
              >
                <SelectValue placeholder="Filters" />
              </SelectTrigger>
              <SelectContent className="text-sm">
                <SelectGroup>
                  <SelectLabel className="border-b border-lightGray">
                    Filter By
                  </SelectLabel>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </aside>
        </div> */}
        <main>
          <aside className="flex items-center gap-8 mx-auto justify-center ">
            <div className="flex flex-col items-center hover:bg-white p-2 rounded-[10px] w-[fit]">
              <span className="bg-lightGray rounded-[10px] h-[38px] w-fit px-2 py-1 flex items-center justify-center gap-2 font-semibold">
                <img src={ngn} alt="ngn" className="w-[24px] h-[24px]" />
              </span>
              <p className="text-xs text-blueGray">NGN</p>
            </div>
            <div className="flex flex-col items-center hover:bg-white p-2 rounded-[10px] w-[fit]">
              <span className="bg-lightGray rounded-[10px] h-[38px] w-fit px-2 py-1 flex items-center justify-center gap-2 font-semibold">
                <img src={usa} alt="usa" className="w-[24px] h-[24px]" />
              </span>
              <p className="text-xs text-blueGray">USD</p>
            </div>
            <div className="flex flex-col items-center hover:bg-white p-2 rounded-[10px] w-[fit]">
              <span className="bg-lightGray rounded-[10px] h-[38px] w-fit px-2 py-1 flex items-center justify-center gap-2 font-semibold">
                <img src={ngn} alt="ngn" className="w-[24px] h-[24px]" />
              </span>
              <p className="text-xs text-blueGray">CFA FRANC</p>
            </div>
            <div className="flex flex-col items-center hover:bg-white p-2 rounded-[10px] w-[fit]">
              <span className="bg-lightGray rounded-[10px] h-[38px] w-fit px-2 py-1 flex items-center justify-center gap-2 font-semibold">
                <img src={ngn} alt="ngn" className="w-[24px] h-[24px]" />
              </span>
              <p className="text-xs text-blueGray">KES</p>
            </div>
            <div className="flex flex-col items-center hover:bg-white p-2 rounded-[10px] w-[fit]">
              <span className="bg-lightGray rounded-[10px] h-[38px] w-fit px-2 py-1 flex items-center justify-center gap-2 font-semibold">
                <img src={ngn} alt="ngn" className="w-[24px] h-[24px]" />
              </span>
              <p className="text-xs text-blueGray">GHA</p>
            </div>
          </aside>
          <section className="bg-white rounded-[20px] w-[95%] mx-auto  my-5 flex justify-between">
            <div className="w-[55%] px-6 py-4">
              <div className="text-xs flex justify-between items-center mb-2">
                <div className="">
                  <p className="text-xs text-disabledText">Bank Name</p>
                  <h6 className="text-sm font-semibold">BLOW</h6>
                </div>
                <h6 className="cursor-pointer">
                  <CopyIcon />
                </h6>
              </div>
              <div className="text-xs flex justify-between items-center mb-2">
                <div className="">
                  <p className="text-xs text-disabledText">Account Name:</p>
                  <h6 className="text-sm font-semibold">Adepoju Deborah</h6>
                </div>
                <h6 className="cursor-pointer">
                  <CopyIcon />
                </h6>
              </div>
              <div className="text-xs flex justify-between items-center mb-2">
                <div className="">
                  <p className="text-xs text-disabledText">Account Number</p>
                  <h6 className="text-sm font-semibold">6138231133</h6>
                </div>
                <h6 className="cursor-pointer">
                  <CopyIcon />
                </h6>
              </div>
              <div className="text-xs flex justify-between items-center mb-2">
                <div className="">
                  <p className="text-xs text-disabledText">00-3452-00</p>
                  <h6 className="text-sm font-semibold">IBAN</h6>
                </div>
                <h6 className="cursor-pointer">
                  <CopyIcon />
                </h6>
              </div>
              <div className="text-xs flex justify-between items-center mb-2">
                <div className="">
                  <p className="text-xs text-disabledText">12312414412112</p>
                  <h6 className="text-sm font-semibold">6138231133</h6>
                </div>
                <h6 className="cursor-pointer">
                  <CopyIcon />
                </h6>
              </div>
            </div>
            <div className="border border-borderOutline rounded-[8px] w-[45%]  px-3 py-1">
              <h6 className="text-sm font-semibold">Scan BarCodes</h6>
              <p className="text-[10px] text-disabledText w-[90%]  ">
                This is a single-use code for your use only. Get a new code each
                time you pay with Blowmoney
              </p>
              <div className=" flex justify-center cursor-pointer rounded-[6px] my-4">
                <QRCodeSVG size={150} value={"wwww"} />
              </div>
            </div>
          </section>
        </main>
        {/* <div className="flex  my-4 justify-center items-center ">
          <EmptyRefundState
            title="No Virtual Wallet"
            subtitle="Customer does not have any Wallet"
          />
        </div> */}
      </section>
    </div>
  );
};

export default VirtualWallet;
