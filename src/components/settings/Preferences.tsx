import { useState } from "react";
import Container from "../layout/Container";
import PageLayout from "../layout/PageLayout";
import PageTitle from "../ui/PageTitle";
import { Switch } from "../ui/switch";
import NameTag from "./NameTag";

const Preferences = () => {
  const labels = [
    "Bank",
    "Card",
    "Apple Pay",
    "QR Code",
    "USSD",
    "Bank Transfer",
    "PayAttitude",
  ];

  const [, setSwitchStates] = useState<Record<string, boolean>>(
    labels.reduce((acc, label) => {
      acc[label] = false;
      return acc;
    }, {} as Record<string, boolean>)
  );

  // Handle switch toggle
  const handleSwitchChange = (label: string) => {
    setSwitchStates((prevStates) => ({
      ...prevStates,
      [label]: !prevStates[label],
    }));
  };

  return (
    <div>
      <Container>
        <PageTitle
          title="Payment Preference"
          subTitle="You can set your desired payment options "
        />
        <PageLayout className="px-12 py-3">
          <NameTag nameTitle="Accept Payment via" />

          <section className="my-4 w-9/12 space-y-4">
            {labels.map((label) => (
              <div key={label} className="flex items-center justify-between">
                <p className="font-normal text-sm">{label}</p>
                <Switch
                  onCheckedChange={() => handleSwitchChange(label)} // Toggle the state
                  className="!bg-blueGray data-[state=checked]:!bg-blowSecondary"
                />
              </div>
            ))}
          </section>
        </PageLayout>
        <PageLayout className="px-12 py-3">
          <NameTag nameTitle="Transfer" />

          <section className="my-4 w-9/12 space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-normal text-lg">
                Send Transfer Receipts via Email
              </p>
              <Switch className="!bg-blueGray data-[state=checked]:!bg-blowSecondary" />
            </div>
            <div className="flex items-center justify-between">
              <p className="font-normal text-lg">
                Send Transfer Receipts via Phone Number
              </p>
              <Switch className="!bg-blueGray data-[state=checked]:!bg-blowSecondary" />
            </div>
            <div className="flex items-center justify-between">
              <p className="font-normal text-lg">
                Confirm Transfer before sending Via Email
              </p>
              <Switch className="!bg-blueGray data-[state=checked]:!bg-blowSecondary" />
            </div>
            <div className="flex items-center justify-between">
              <p className="font-normal text-lg">
                Confirm Transfer before sending Via Phone Number
              </p>
              <Switch className="!bg-blueGray data-[state=checked]:!bg-blowSecondary" />
            </div>
          </section>
        </PageLayout>
        <PageLayout className="px-12 py-3">
          <NameTag nameTitle="Subscriptions" />

          <section className="my-4 w-9/12 space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-normal text-lg">Send to Customer</p>
              <Switch className="!bg-blueGray data-[state=checked]:!bg-blowSecondary" />
            </div>
            <div className="flex items-center justify-between">
              <p className="font-normal text-lg">
                Send Daily issue reports to customers
              </p>
              <Switch className="!bg-blueGray data-[state=checked]:!bg-blowSecondary" />
            </div>
            <div className="flex items-center justify-between">
              <p className="font-normal text-lg">Send Expiring card alerts</p>
              <Switch className="!bg-blueGray data-[state=checked]:!bg-blowSecondary" />
            </div>
          </section>
        </PageLayout>
      </Container>
    </div>
  );
};

export default Preferences;
