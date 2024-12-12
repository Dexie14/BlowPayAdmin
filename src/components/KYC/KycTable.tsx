import TableComp from "../table/TableComp";
import Pagination from "../table/Pagination";
import { useNavigate } from "react-router-dom";
import { BinIcon, EditIcon } from "@/assets/svgComp/General";
import { KYCData } from "@/hooks/api/crud/kyc";
import { format, parseISO } from "date-fns";
import { useState } from "react";

// export type DataItem = {
//   id: number;
//   email: string;
//   fullName: string;
//   address: string;
//   phone: string;
//   tier: string;
//   status: string;
//   date: string;
// };

// const sampleData: DataItem[] = [
//   {
//     id: 1,
//     email: "jonasajoku@gmail.com",
//     fullName: "Jonah Ani Nonso",
//     address: "No 24, W.F. Kumuyi Street, . . .",
//     phone: "+2348023456789",
//     tier: "Tier 1",
//     status: "Enabled",
//     date: "Wednesday, July 8, 2024 12:53 PM",
//   },
//   {
//     id: 1,
//     email: "jonasajoku@gmail.com",
//     fullName: "Jonah Ani Nonso",
//     address: "No 24, W.F. Kumuyi Street, . . .",
//     phone: "+2348023456789",
//     tier: "Tier 1",
//     status: "Enabled",
//     date: "Wednesday, July 8, 2024 12:53 PM",
//   },
//   {
//     id: 1,
//     email: "jonasajoku@gmail.com",
//     fullName: "Jonah Ani Nonso",
//     address: "No 24, W.F. Kumuyi Street, . . .",
//     phone: "+2348023456789",
//     tier: "Tier 1",
//     status: "Enabled",
//     date: "Wednesday, July 8, 2024 12:53 PM",
//   },
// ];

const headers = [
  { content: <> Customer Email</> },
  { content: <>Full Name</> },
  { content: <>Address</> },
  { content: <>Phone Number</> },
  { content: <>Tier</> },
  { content: <>Status</> },
  { content: <>Added on </> },
];

const KycTable = ({ allKYCData }: { allKYCData: KYCData[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10;

  // Total entries (could be fetched or passed down as props)
  const totalEntries = allKYCData.length;

  // Calculate the data for the current page
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = allKYCData.slice(indexOfFirstEntry, indexOfLastEntry);
  const navigate = useNavigate();
  const renderRow = (item: KYCData, index: number) => {
    const rowClass = index % 2 === 0 ? "bg-blowBG" : "bg-white";

    const handleRowClick = () => {
      navigate(`/kyc/${item.id}`, { state: { data: item } });
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
            {item?.user?.user?.emailAddress}
          </span>
        </td>
        <td className="py-1 px-4 ">{item?.user?.user?.firstName}</td>
        <td className="py-1 px-4 ">{item?.country}</td>
        <td className="py-1 px-4 ">{item?.user?.user?.phoneNumber}</td>
        <td className="py-1 px-4 ">{item?.tier}</td>

        <td className="py-1 px-4 text-xs ">
          <span
            className={`rounded-[10px] h-[24px] w-fit px-2 py-1 flex items-center justify-center font-light ${
              item?.status === "Disable"
                ? "bg-[#F42F4B0D] text-blowSecondary"
                : "bg-[#EBF8E5] text-blowSuccess"
            }`}
          >
            {item.status}
          </span>
        </td>

        <td className="py-1 px-4 ">
          {" "}
          {item.createdAt
            ? format(parseISO(item.createdAt), "MMMM d, yyyy h:mm a")
            : "N/A"}
        </td>
        <td className="py-1 px-4 text-xs ">
          <span className="flex items-center gap-3">
            <EditIcon />
            <BinIcon />
          </span>
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

export default KycTable;
