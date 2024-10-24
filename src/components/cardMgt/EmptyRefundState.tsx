import { Button } from "../ui/button";
import emptySheet from "@/assets/images/emptySheet.png";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import InputField from "../input/InputField";

const EmptyRefundState = () => {
  return (
    <div className="py-7 rounded-[20px] bg-white text-center  w-8/12">
      <div className="flex w-full justify-center mb-3">
        <img src={emptySheet} alt="emptySheet" className="" />
      </div>
      <p className="font-semibold">No refund Made</p>
      <p className="my-3 text-sm text-blueGray">
        Customer does not have any Transaction History
      </p>

      <Dialog>
        <DialogTrigger className="w-full">
          <Button className="bg-buttonColor text-blowText text-lg cursor-pointer font-normal h-[50px] rounded-[6px] w-[60%] mx-auto">
            Initiate Refunds
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white !rounded-[30px]">
          <DialogDescription>
            <h4 className="text-lg font-semibold text-blowText text-center mt-9 mb-4">
              Refund Customer
            </h4>
            <p className="text-sm text-blueGray">
              Do you want to initiate a refund to this customer?
            </p>
            <p className="text-sm text-blueGray my-4">
              Transaction Amount:
              <span className="text-lg font-bold text-blowText">
                {" "}
                NGN2,071.08{" "}
              </span>
            </p>
            <div>
              <p className="text-[10px] font-semibold text-blowText">
                Refund Amount
              </p>
              <InputField placeholder="NGN 000.000" name="amount" />
            </div>
            <Button className="bg-blowText text-white text-sm cursor-pointer font-normal h-[50px] w-full rounded-[20px] my-4">
              Confirm
            </Button>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmptyRefundState;
