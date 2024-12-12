import TableComp from "../table/TableComp";
import Pagination from "../table/Pagination";
import { useNavigate } from "react-router-dom";
import { TransData } from "@/hooks/api/crud/transaction";

import { format, parseISO } from "date-fns";
import { useState } from "react";

// export type DataItem = {
//   id: number;
//   amount: number;
//   CustomerName: string;
//   email: string;
//   reference: string;
//   channel: string;
//   description: string;
//   date: string;
// };

// const sampleData: DataItem[] = [
//   {
//     id: 1,
//     amount: 30558.39,
//     CustomerName: "Doris Odo",
//     email: "dorisodo@gmail.com",
//     reference: "Blowmoney/rhhjerl-133221212",
//     channel: "Cards",
//     description: "Airtime Purchase",
//     date: "Wednesday, July 8, 2024 12:53 PM",
//   },
//   {
//     id: 2,
//     amount: 30558.39,
//     CustomerName: "Doris Odo",
//     email: "dorisodo@gmail.com",
//     reference: "Blowmoney/rhhjerl-133221212",
//     channel: "Cards",
//     description: "Flight Booking",
//     date: "Wednesday, July 8, 2024 12:53 PM",
//   },
//   {
//     id: 1,
//     amount: 30558.39,
//     CustomerName: "Doris Odo",
//     email: "dorisodo@gmail.com",
//     reference: "Blowmoney/rhhjerl-133221212",
//     channel: "Bank Transfer",
//     description: "Intra Bank transaction",
//     date: "Wednesday, July 8, 2024 12:53 PM",
//   },
// ];

const headers = [
  { content: <>Amount</> },
  { content: <> Customer</> },
  { content: <>Reference</> },
  { content: <>Channel </> },
  { content: <>Description </> },
  { content: <>Paid on </> },
];

const TransTable = ({ allTransData }: { allTransData: TransData[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10;

  // Total entries (could be fetched or passed down as props)
  const totalEntries = allTransData.length;

  // Calculate the data for the current page
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = allTransData.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  const navigate = useNavigate();
  const renderRow = (item: TransData, index: number) => {
    const rowClass = index % 2 === 0 ? "bg-blowBG" : "bg-white";

    const handleRowClick = () => {
      navigate(`/history/${item.id}`, { state: { data: item } });
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
          {item?.user?.firstName} {item?.user?.lastName}.{" "}
          {item?.user?.emailAddress}
        </td>

        <td className="py-1 px-4 ">
          {/* {item.reference}  */}
          expected reference
        </td>
        <td className="py-1 px-4 text-xs ">
          <span className="bg-lightGray rounded-[10px] h-[24px] w-fit px-2 py-1 flex items-center justify-center font-light">
            {/* {item.channel}  */}
            {item?.type}
          </span>
        </td>
        <td className="py-1 px-4 ">{item.description}</td>
        <td className="py-1 px-4 ">
          {" "}
          {item.createdAt
            ? format(parseISO(item.createdAt), "MMMM d, yyyy h:mm a")
            : "N/A"}
        </td>
      </tr>
    );
  };
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section>
      <div className="my-3">
        <TableComp
          headers={headers}
          data={currentEntries}
          renderRow={renderRow}
        />
      </div>
      <div>
        <Pagination
          currentPage={currentPage}
          totalEntries={totalEntries}
          entriesPerPage={entriesPerPage}
          onPageChange={onPageChange}
        />
      </div>
    </section>
  );
};

export default TransTable;
