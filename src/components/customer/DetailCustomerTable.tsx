import TableComp from "../table/TableComp";
// import Pagination from "../table/Pagination";
import { useNavigate } from "react-router-dom";

export type DataItem = {
  id: number;
  amount: string;
  channel: string;
  status: string;
  date: string;
};

const sampleData: DataItem[] = [
  {
    id: 1,
    amount: "30,558.39",
    channel: "Cards",
    status: "Completed",
    date: "July 8, 2024 12:53 PM",
  },
  {
    id: 1,
    amount: "30,558.39",
    channel: "Bank Transfer",
    status: "Pending",
    date: "July 8, 2024 12:53 PM",
  },
  {
    id: 1,
    amount: "30,558.39",
    channel: "Cards",
    status: "Pending",
    date: "July 8, 2024 12:53 PM",
  },
];

const headers = [
  { content: <> Amount</> },
  { content: <>Channel</> },
  { content: <>Status</> },
  { content: <>Date and Time </> },
];

const DetailCustomerTable = () => {
  const navigate = useNavigate();
  const renderRow = (item: DataItem, index: number) => {
    const rowClass = index % 2 === 0 ? "bg-blowBG" : "bg-white";

    const handleRowClick = () => {
      navigate(`/customers/${item.id}`, { state: { data: item } });
    };
    return (
      <tr
        key={index}
        onClick={handleRowClick}
        className={`w-full text-[12px] text-nowrap text-left font-medium text-tableText h-[70px] cursor-pointer hover:bg-blueGray ${rowClass}`}
      >
        <td className="py-1 px-4">
          <span className="flex items-center gap-2 ">
            <div className={`h-[10px] w-[10px] rounded-full bg-disabledText`} />
            NGN {item?.amount}
          </span>
        </td>
        <td className="py-1 px-4 text-xs ">
          <span className="bg-lightGray rounded-[10px] h-[24px] w-fit px-2 py-1 flex items-center justify-center font-light">
            {item.channel}
          </span>
        </td>

        <td className="py-1 px-4 text-xs ">
          <span
            className={`rounded-[10px] h-[24px] w-fit px-2 py-1 flex items-center justify-center font-light ${
              item?.status === "Pending"
                ? "bg-[#F7F5E6] text-blowWarning"
                : "bg-[#EBF8E5] text-blowSuccess"
            }`}
          >
            {item.status}
          </span>
        </td>

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
        {/* <Pagination /> */}
      </div>
    </section>
  );
};

export default DetailCustomerTable;
