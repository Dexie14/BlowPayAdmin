import netflix from "@/assets/images/netflix.png";
import spotify from "@/assets/images/spotify.png";
import shopify from "@/assets/images/shopify.png";
import figma from "@/assets/images/figma.png";

interface TransactionType {
  id: number;
  logo: string;
  name: string;
  date: string;
  amount: string;
}

const transactions: TransactionType[] = [
  {
    id: 1,
    logo: netflix,
    name: "Netflix",
    date: "Apr 05 2023 at 21:46",
    amount: "-$15.99",
  },
  {
    id: 2,
    logo: spotify,
    name: "Spotify",
    date: "Mar 14, 2023 at 08:10",
    amount: "+$135.49",
  },
  {
    id: 3,
    logo: figma,
    name: "Figma",
    date: "Feb 20, 2023 at 19:24",
    amount: "-$75.00",
  },
  {
    id: 4,
    logo: shopify,
    name: "Shopify",
    date: "Jan 07, 2023 at 06:58",
    amount: "+$934.29",
  },
];

const TransactionCard = () => {
  return (
    <div className="border border-lightGray bg-white rounded-[12px] py-3 px-3 w-full ">
      <aside className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <h4 className="text-xl font-bold">Transactions</h4>
          <hr className="border border-disabledText h-[12px]" />
          <p className="text-xs text-disabledText">Upcoming Bills</p>
        </div>

        <u className="text-disabledText text-xs">View all</u>
      </aside>
      <section>
        {transactions.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center justify-between py-3 ${
              index < transactions.length - 1 ? "border-b border-lightGray" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="h-[44px] w-[44px] border border-lightGray bg-white flex items-center justify-center rounded-[4px]">
                <img src={item.logo} alt={item.name} />
              </div>
              <div>
                <p className="text-blowText text-sm">{item.name}</p>
                <p className="text-disabledText text-xs">{item.date}</p>
              </div>
            </div>
            <p
              className={`text-xs font-semibold ${
                item.amount.includes("-")
                  ? "text-blowSecondary"
                  : "text-brightGreen"
              }`}
            >
              {item.amount}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TransactionCard;
