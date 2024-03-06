import { FaInstagram } from "react-icons/fa6";
import { FaLine } from "react-icons/fa";

const data = [
    {
        label: "TEL",
        value: "+886-7-1234567",
    },
    {
        label: "FAX",
        value: "+886-7-1234568",
    },
    {
        label: "MAIL",
        value: "elh@hexschool.com",
    },
    {
        label: "WEB",
        value: "www.elhhexschool.com.tw",
    },
];

const Footer = () => {
    return (
        <footer className="bg-neutral-bg py-20">
            <div className="container">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto]">
                    <img
                        src="/assets/desktop/logo.png"
                        className="h-18"
                        alt="Enjoyment Luxury Hotel"
                    />
                    <div className="gap row-start-2 flex gap-4">
                        <div className="grid size-10 place-items-center rounded-full border border-white">
                            <FaLine />
                        </div>
                        <div className="grid size-10 place-items-center rounded-full border border-white">
                            <FaInstagram />
                        </div>
                    </div>
                    <ul className="row-span-2 grid gap-4 lg:col-start-2 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-10">
                        {data.map((item) => (
                            <li className="space-y-2" key={item.value}>
                                <p className="font-bold">{item.label}</p>
                                <p className="font-sm text-neutral-40 lg:text-base lg:font-medium">
                                    {item.value}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-20 grid gap-4 text-sm lg:grid-cols-[1fr_auto] lg:text-base lg:font-medium">
                    <p>806023 台灣高雄市新興區六角路123號</p>
                    <p>© 享樂酒店 2023 All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
