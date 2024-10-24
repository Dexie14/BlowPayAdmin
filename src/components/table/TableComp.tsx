// TableComponent.tsx
import { ReactNode } from "react";

type Header = {
  content: ReactNode; // Text, icon, or any JSX content
  align?: "left" | "center" | "right"; // Optional alignment
};

type TableProps<T> = {
  headers: Header[]; // Array of header names or JSX elements
  data: T[]; // Array of data items
  renderRow: (item: T, index: number) => ReactNode; // Custom render function for table rows
};

const TableComp = <T,>({ headers, data, renderRow }: TableProps<T>) => {
  return (
    <div className="overflow-x-auto scrollableCSS">
      <table className="min-w-full table-auto tabling">
        <thead className="text-left ">
          <tr className="bg-white text-blowText text-sm font-semibold">
            {headers.map((header, index) => (
              <th key={index} className="py-4 px-4 text-nowrap">
                {header?.content}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {data.map((item, index) => renderRow(item, index))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComp;
