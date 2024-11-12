import TableComp from "../table/TableComp";
import Pagination from "../table/Pagination";
import { useNavigate } from "react-router-dom";
import usa from "@/assets/images/usa.png";
import ngn from "@/assets/images/ngn.png";

export type DataItem = {
  id: number;
  amount: number;
  CustomerName: string;
  email: string;
  walletID: string;
  walletType: string;
  walletTypeCode: string;
  date: string;
  Status: string;
};

const sampleData: DataItem[] = [
  {
    id: 1,
    amount: 30558.39,
    CustomerName: "Doris Odo",
    email: "dorisodo@gmail.com",
    walletID: "5334 * * * * * * 24",
    walletType: "United State",
    walletTypeCode: "USD",
    date: "Wednesday, July 8, 2024 12:53 PM",
    Status: "active",
  },
  {
    id: 2,
    amount: 30558.39,
    CustomerName: "Doris Odo",
    email: "dorisodo@gmail.com",
    walletID: "5334 * * * * * * 24",
    walletType: "Nigerian Naira",
    walletTypeCode: "NGN",
    date: "Wednesday, July 8, 2024 12:53 PM",
    Status: "active",
  },
  {
    id: 1,
    amount: 30558.39,
    CustomerName: "Doris Odo",
    email: "dorisodo@gmail.com",
    walletID: "5334 * * * * * * 24",
    walletType: "Bank Transfer",
    walletTypeCode: "USD",
    date: "Wednesday, July 8, 2024 12:53 PM",
    Status: "active",
  },
];

const headers = [
  { content: <>Date Created </> },
  { content: <> Customer</> },
  { content: <>Wallet Type </> },
  { content: <>Wallet I.D</> },
  { content: <>Status</> },
];

export type cardType = "NGN" | "USD";

const infoImages: Record<cardType, JSX.Element> = {
  NGN: <img src={ngn} alt="ngn" className="w-[24px] h-[24px]" />,
  USD: <img src={usa} alt="Mastercard" className="w-[24px] h-[24px]" />,
};

const WalletTable = () => {
  const navigate = useNavigate();
  const renderRow = (item: DataItem, index: number) => {
    const rowClass = index % 2 === 0 ? "bg-blowBG" : "bg-white";

    const handleRowClick = () => {
      navigate(`/wallet/${item.id}`, { state: { data: item } });
    };
    return (
      <tr
        key={index}
        onClick={handleRowClick}
        className={`w-full text-[12px] text-nowrap text-left font-medium text-tableText h-[70px] cursor-pointer hover:bg-blueGray ${rowClass}`}
      >
        <td className="py-1 px-4 ">{item.date}</td>
        <td className="py-1 px-4 ">
          {item.CustomerName} . {item?.email}
        </td>
        <td className="py-1 px-4 text-sm ">
          <span className="bg-lightGray rounded-[10px] h-[38px] w-fit px-2 py-1 flex items-center justify-center gap-2 font-semibold">
            {infoImages[item?.walletTypeCode as cardType]}
            <div>
              {item.walletType}
              <p className="text-xs text-disabledText mt-1 font-normal">{item.walletTypeCode}</p>
            </div>
          </span>
        </td>

        <td className="py-1 px-4 ">{item.walletID}</td>

        <td className="py-1 px-4 align-middle">
          <span className="flex justify-center items-center gap-2 ">
            <div
              className={`h-[10px] w-[10px] rounded-full ${
                item?.Status === "inactive"
                  ? "bg-disabledText"
                  : "bg-brightGreen "
              } `}
            />
            {item?.Status}
          </span>
        </td>
      </tr>
    );
  };

  return (
    <section>
      <div className="my-3">
        <TableComp headers={headers} data={sampleData} renderRow={renderRow} />
      </div>
      <div>
        <Pagination />
      </div>
    </section>
  );
};

export default WalletTable;
