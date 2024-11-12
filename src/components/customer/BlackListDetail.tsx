import avatarJohn from "@/assets/images/avatarJohn.png";
import { BlockIcon, CopyIcon } from "@/assets/svgComp/CardGroupIcons";
import { Switch } from "../ui/switch";

const BlackListDetail = () => {
  return (
    <div className="bg-[#FBFBFB] rounded-[20px] px-4 py-8">
      <section className="flex items-center justify-between">
        <aside className="flex items-center gap-4 ">
          <div>
            <img
              src={avatarJohn}
              alt="avatarJohn"
              className="w-[56px] h-[56px]"
            />
          </div>
          <div>
            <h6 className="font-semibold">Jonathan Eke</h6>
            <h6 className="text-blueGray text-xs">Paid on Oct 23, 2023</h6>
          </div>
        </aside>
        <p className="text-sm">NGN500,000.00</p>
      </section>
      <section className="my-7 w-[90%]">
        <div className="text-xs flex justify-between items-center border-b border-borderOutline pb-2 mb-7">
          <h6 className="flex items-center gap-3">Reference:</h6>
          <h6 className="cursor-pointer flex items-center gap-3">
            Blowmoney-user-f234Sd28301341HFks
            <CopyIcon />
          </h6>
        </div>
        <div className="text-xs flex justify-between items-center border-b border-borderOutline pb-2 mb-7">
          <h6 className="flex items-center gap-3">Requested on:</h6>
          <h6 className="cursor-pointer flex items-center gap-3">
            Sep 26, 2023, 12:41pm
          </h6>
        </div>
        <div className="text-xs flex justify-between items-center border-b border-borderOutline pb-2 mb-7">
          <h6 className="flex items-center gap-3">Total Money</h6>
          <h6 className="cursor-pointer flex items-center gap-3">
            NGN500,000.00
          </h6>
        </div>
        <div className="text-xs flex justify-between items-center border-b border-borderOutline pb-2 mb-7">
          <h6 className="flex items-center gap-3">Your Account:</h6>
          <h6 className="cursor-pointer flex items-center gap-3">
            NGN500,000.00
          </h6>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <BlockIcon />
            <p className="font-semibold text-sm">Blacklist this customer</p>
          </div>
          <Switch className="!bg-blueGray data-[state=checked]:!bg-slate-900" />
        </div>
      </section>
      <section className="my-11">
        <p className="">Analytics</p>
        <section className="my-4 flex items-center justify-between w-[90%] text-sm">
          <div>
            <p className="text-blueGray text-xs">Account Name</p>
            <h3 className="font-medium">Boyei Michael</h3>
          </div>
          <div className="w-[40%]">
            <p className="text-blueGray text-xs">Bank Account Number</p>
            <h3 className="font-medium">0171007786</h3>
          </div>
        </section>
        <section className="my-4 flex items-center justify-between w-[90%] text-sm">
          <div>
            <p className="text-blueGray text-xs">IP Address</p>
            <h3 className="font-medium">105.113.26.42</h3>
          </div>
          <div className="w-[40%]">
            <p className="text-blueGray text-xs">Bank Name</p>
            <h3 className="font-medium">Guaranty Trust Bank</h3>
          </div>
        </section>
      </section>
    </div>
  );
};

export default BlackListDetail;
