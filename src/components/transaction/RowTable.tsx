import { SampleDataItem } from "./RecentTransaction";

interface RowTableProps {
  item: SampleDataItem;
  index: number;
}

export const RowTable = ({ item, index }: RowTableProps) => {
  const rowClass = index % 2 === 0 ? "bg-blowBG" : "bg-white";

  return (
    <table className="min-w-full table-auto tabling">
      <tbody className="">
        <tr
          key={index}
          className={`w-full text-[12px] text-nowrap text-left font-medium text-tableText h-[56px] cursor-pointer hover:bg-blueGray ${rowClass}`}
        >
          <td className="py-1 px-4">
            <span className="flex justify-center items-center gap-2 ">
              <div
                className={`h-[10px] w-[10px] rounded-full bg-brightGreen`}
              />
              NGN {item?.amount}
            </span>
          </td>

          <td className="py-1 px-4 ">{item.reference}</td>

          <td className="py-1 px-4 ">{item.description}</td>
          <td className="py-1 px-4 ">{item.date}</td>
        </tr>
      </tbody>
    </table>
  );
};
