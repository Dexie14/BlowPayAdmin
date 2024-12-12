import TableComp from "../table/TableComp";
import mastercard from "@/assets/images/mastercard.png";
import visa from "@/assets/images/VISA.png";
// import Pagination from "../table/Pagination";
import { useNavigate } from "react-router-dom";

export type DataItem = {
  id: number;
  created: string;
  CustomerName: string;
  email: string;
  CardNumber: string;
  CardType: string;
  Status: string;
};

const sampleData: DataItem[] = [
  {
    id: 1,
    created: "Wednesday, July 8, 2024 12:53 PM",
    CustomerName: "Doris Odo",
    email: "dorisodo@gmail.com",
    CardNumber: "5334 * * * *  * * * * * * * 24",
    CardType: "Visa",
    Status: "active",
  },
  {
    id: 2,
    created: "Wednesday, July 8, 2024 12:53 PM",
    CustomerName: "Doris Odo",
    email: "dorisodo@gmail.com",
    CardNumber: "5334 * * * *  * * * * * * * 24",
    CardType: "Mastercard",
    Status: "inactive",
  },
  {
    id: 1,
    created: "Wednesday, July 8, 2024 12:53 PM",
    CustomerName: "Doris Odo",
    email: "dorisodo@gmail.com",
    CardNumber: "5334 * * * *  * * * * * * * 24",
    CardType: "Visa",
    Status: "active",
  },
  {
    id: 1,
    created: "Wednesday, July 8, 2024 12:53 PM",
    CustomerName: "Doris Odo",
    email: "dorisodo@gmail.com",
    CardNumber: "5334 * * * *  * * * * * * * 24",
    CardType: "Visa",
    Status: "active",
  },
];

const headers = [
  { content: <>Date Created</> },
  { content: <> Customer</> },
  { content: <>Card Number</> },
  { content: <>Card Type </> },
  { content: <>Status </> },
];

export type cardType = "Visa" | "Mastercard";

const infoImages: Record<cardType, JSX.Element> = {
  Visa: <img src={visa} alt="Visa" className="w-[48px] h-[32px]" />,
  Mastercard: (
    <img src={mastercard} alt="Mastercard" className="w-[48px] h-[32px]" />
  ),
};

const CardTable = () => {
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
        className={`w-full text-[13px] text-left font-medium text-tableText h-[70px] cursor-pointer hover:bg-blueGray ${rowClass}`}
      >
        <td className="py-1 px-4">{item.created}</td>
        <td className="py-1 px-4 text-sm">
          {item.CustomerName} . {item?.email}
        </td>

        <td className="py-1 px-4 text-sm ">{item.CardNumber}</td>
        <td className="py-1 px-4 text-sm ">
          <span className="bg-lightGray rounded-[10px] h-[38px] w-fit px-2 py-1 flex items-center justify-center gap-2 font-semibold">
            {item.CardType} {infoImages[item?.CardType as cardType]}
          </span>
        </td>
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
        {/* <Pagination /> */}
      </div>
    </section>
  );
};

export default CardTable;
