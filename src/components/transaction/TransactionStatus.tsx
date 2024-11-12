import outgoing from "@/assets/images/outgoing.png";
import incoming from "@/assets/images/incoming.png";

const TransactionStatus = () => {
  return (
    <div>
      <main className="bg-shadeBackground rounded-[20px] h-[77px] mb-5 w-full flex items-center gap-[50px] p-4">
        <div className="">
          <h6 className="text-blueGray text-xs mb-2">Successful</h6>
          <h6 className=" text-xs">
            1/<span className="text-blueGray">2</span>
          </h6>
        </div>
        <aside className="flex items-center gap-4 bg-white rounded-[10px] h-[61px] p-2 shadow-custom">
          <div>
            <img src={incoming} alt="incoming" className="w-[30px] h-[30px]" />
          </div>
          <div>
            <h6 className="text-blueGray text-sm">Incoming</h6>
            <h6 className=" text-sm font-semibold">NGN9,450.00</h6>
          </div>
        </aside>
        <aside className="flex items-center gap-4 bg-white rounded-[10px] h-[61px] p-2 shadow-custom">
          <div>
            <img src={outgoing} alt="outgoing" className="w-[30px] h-[30px]" />
          </div>
          <div>
            <h6 className="text-blueGray text-sm">Outgoing</h6>
            <h6 className=" text-sm font-semibold">NGN1,200.00</h6>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default TransactionStatus;
