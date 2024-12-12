import TableComp from "../table/TableComp";
// import Pagination from "../table/Pagination";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import PageTitle from "../ui/PageTitle";
import NameTag from "../settings/NameTag";
import PageLayout from "../layout/PageLayout";

export type DataItem = {
  id: number;
  email: string;
  fullName: string;
  activity: string;
  date: string;
};

const sampleData: DataItem[] = [
  {
    id: 1,
    email: "jonasajoku@gmail.com",
    fullName: "Jonah Ani Nonso",
    activity:
      "Hero updated webhook URL - test_redirect_url and test_webhook_endpoint",
    date: "July 8, 2024 12:53 PM",
  },
];

const headers = [
  { content: <> Time</> },
  { content: <>User</> },
  { content: <>Activity</> },
];

const AuditTable = () => {
  const [selectedRow, setSelectedRow] = useState<DataItem | null>(null);
  const renderRow = (item: DataItem, index: number) => {
    const rowClass = index % 2 === 0 ? "bg-blowBG" : "bg-white";

    // Function to handle the click on a row
    const handleRowClick = (row: DataItem) => {
      setSelectedRow(row);
    };

    return (
      <tr
        key={index}
        onClick={() => handleRowClick(item)}
        className={`w-full text-[12px] text-nowrap text-left font-medium text-tableText h-[70px] cursor-pointer hover:bg-blueGray ${rowClass}`}
      >
        <td className="py-1 px-4 ">{item.date}</td>
        <td className="py-1 px-4 ">{item.fullName}</td>

        <td className="py-1 px-4 ">{item.activity}</td>
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
      {selectedRow && (
        <Sheet
          open={selectedRow !== null}
          onOpenChange={(open) => {
            if (!open) setSelectedRow(null);
          }}
        >
          <SheetContent className="px-9" style={{ maxWidth: "40vw" }}>
            
              <SheetTitle className="my-7">
                <PageTitle
                  title="About this activity"
                  subTitle="Gives a detailed overview on the various activities on the system"
                />
              </SheetTitle>

              <section className="my-10 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="w-1/2">
                    <p className="text-disabledText text-xs">User:</p>
                    <h6 className=" text-sm">{selectedRow.fullName}</h6>
                  </div>
                  <div  className="w-1/2">
                    <p className="text-disabledText text-xs">Email:</p>
                    <h6 className=" text-sm">{selectedRow.email}</h6>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-disabledText text-xs">Role:</p>
                    <h6 className=" text-sm">Admin</h6>
                  </div>
                  <div  className="w-1/2">
                    <p className="text-disabledText text-xs">IP Address:</p>
                    <h6 className=" text-sm">102.91.71.62</h6>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-disabledText text-xs">Date:</p>
                    <h6 className=" text-sm">July 8, 2024, 12:30pm</h6>
                  </div>
                </div>
              </section>
              <section className="py-5">
                <PageLayout className="">
                  <NameTag nameTitle="Test _webhook_endpoint" />
                  <p className="text-blueGray text-xs my-5">
                    + https://blowmoney.com/payments/admin/ webhook.
                  </p>
                </PageLayout>
              </section>
          </SheetContent>
        </Sheet>
      )}
    </section>
  );
};

export default AuditTable;
