import TableComp from "../table/TableComp";
import Pagination from "../table/Pagination";
import { useNavigate } from "react-router-dom";

export type DataItem = {
  id: number;
  email: string;
  fullName: string;
  phone: string;
  date: string;
};

const sampleData: DataItem[] = [
  {
    id: 1,
    email: "jonasajoku@gmail.com",
    fullName: "Jonah Ani Nonso",
    phone: "+2348023456789",
    date: "July 8, 2024 12:53 PM",
  },
  {
    id: 1,
    email: "jonasajoku@gmail.com",
    fullName: "Jonah Ani Nonso",
    phone: "+2348023456789",
    date: "July 8, 2024 12:53 PM",
  },
  {
    id: 1,
    email: "jonasajoku@gmail.com",
    fullName: "Jonah Ani Nonso",
    phone: "+2348023456789",
    date: "July 8, 2024 12:53 PM",
  },
];

const headers = [
  { content: <> Customer Email</> },
  { content: <>Full Name</> },
  { content: <>Phone Number</> },
  { content: <>Added on </> },
];

const CustomerTable = () => {
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
            {item?.email}
          </span>
        </td>
        <td className="py-1 px-4 ">{item.fullName}</td>

        <td className="py-1 px-4 ">{item.phone}</td>

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

export default CustomerTable;