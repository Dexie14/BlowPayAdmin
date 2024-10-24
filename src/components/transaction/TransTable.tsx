import TableComp from "../table/TableComp";
import Pagination from "../table/Pagination";
import { useNavigate } from "react-router-dom";

export type DataItem = {
  id: number;
  amount: number;
  CustomerName: string;
  email: string;
  reference: string;
  channel: string;
  description: string;
  date: string;
};

const sampleData: DataItem[] = [
  {
    id: 1,
    amount: 30558.39,
    CustomerName: "Doris Odo",
    email: "dorisodo@gmail.com",
    reference: "Blowmoney/rhhjerl-133221212",
    channel: "Cards",
    description: "Airtime Purchase",
    date: "Wednesday, July 8, 2024 12:53 PM",
  },
  {
    id: 2,
    amount: 30558.39,
    CustomerName: "Doris Odo",
    email: "dorisodo@gmail.com",
    reference: "Blowmoney/rhhjerl-133221212",
    channel: "Cards",
    description: "Flight Booking",
    date: "Wednesday, July 8, 2024 12:53 PM",
  },
  {
    id: 1,
    amount: 30558.39,
    CustomerName: "Doris Odo",
    email: "dorisodo@gmail.com",
    reference: "Blowmoney/rhhjerl-133221212",
    channel: "Bank Transfer",
    description: "Intra Bank transaction",
    date: "Wednesday, July 8, 2024 12:53 PM",
  },
];

const headers = [
  { content: <>Amount</> },
  { content: <> Customer</> },
  { content: <>Reference</> },
  { content: <>Channel </> },
  { content: <>Description </> },
  { content: <>Paid on </> },
];

const TransTable = () => {
  const navigate = useNavigate();
  const renderRow = (item: DataItem, index: number) => {
    const rowClass = index % 2 === 0 ? "bg-blowBG" : "bg-white";

    const handleRowClick = () => {
      navigate(`/card-detail/${item.id}`, { state: { data: item } });
    };
    return (
      <tr
        key={index}
        onClick={handleRowClick}
        className={`w-full text-[12px] text-nowrap text-left font-medium text-tableText h-[70px] cursor-pointer hover:bg-blueGray ${rowClass}`}
      >
        <td className="py-1 px-4">
          <span className="flex justify-center items-center gap-2 ">
            <div className={`h-[10px] w-[10px] rounded-full bg-brightGreen`} />
            NGN {item?.amount}
          </span>
        </td>
        <td className="py-1 px-4 ">
          {item.CustomerName} . {item?.email}
        </td>

        <td className="py-1 px-4 ">{item.reference}</td>
        <td className="py-1 px-4 text-xs ">
          <span className="bg-lightGray rounded-[10px] h-[24px] w-fit px-2 py-1 flex items-center justify-center font-light">
            {item.channel}
          </span>
        </td>
        <td className="py-1 px-4 ">{item.description}</td>
        <td className="py-1 px-4 ">{item.date}</td>
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

export default TransTable;
