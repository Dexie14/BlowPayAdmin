import NIMC from "@/assets/images/NIMC.png"
import NIMCBack from "@/assets/images/NIMCBack.png"

const Tier2 = () => {
  return (
    <div>
      <section className="flex gap-5">
        <div className="w-[35%]">
          <h3 className="font-semibold text-lg">Document Info</h3>
          <aside className="space-y-5 mt-4">
            <div>
              <p className="text-disabledText text-xs">Document</p>
              <h6 className="font-bold text-sm">National Identity Card</h6>
            </div>
            <div>
              <p className="text-disabledText text-xs">Document Number</p>
              <h6 className="font-bold text-sm"> 0000 0000 0000</h6>
            </div>
            <div>
              <p className="text-disabledText text-xs">Expiry Date</p>
              <h6 className="font-bold text-sm">01-OCT-1960</h6>
            </div>
          </aside>
        </div>
        <div className="w-[60%]">
          <aside>
            <h3 className="font-semibold text-lg">Front</h3>
            <img src={NIMC} alt="document"/>
          </aside> 
          <aside className="my-3">
            <h3 className="font-semibold text-lg">Back</h3>
            <img src={NIMCBack} alt="document"/>
          </aside> 
          <div className="flex items-center gap-4 justify-center">
            <p className="text-blowSecondary">Approve</p>
            <p>Reject</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tier2;
