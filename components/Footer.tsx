import { footerList1, footerList2, footerList3 } from "../utils/constants";

const FooterList = ({ items, mt }: { items: string[]; mt: boolean }) => (
  <div className={`flex flex-wrap gap-2 ${mt && "mt-5"}`}>
    {items.map((item) => (
      <p className="text-gray-400 text-sm hover:underline cursor-pointer" key={item}>
        {item}
      </p>
    ))}
  </div>
);

const Footer = () => {
  return (
    <div className="mt-6 hidden lg:block">
      <FooterList items={footerList1} mt={false} />
      <FooterList items={footerList2} mt />
      <FooterList items={footerList3} mt />
      <p className="text-gray-400 text-sm mt-5">2022 Bakka - Caelan Curry</p>
    </div>
  );
};

export default Footer;
