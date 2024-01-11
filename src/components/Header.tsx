"use client";
import { Select } from "antd";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import ArrowDownIcon from "./icons/arrow-down.icon";
import { useState } from "react";
import ViIcon from "./icons/vi.icon";
import EnIcon from "./icons/en.icon";
import CNIcon from "./icons/cn.icon";
const data = [
  {
    value: "vi",
    label: (
      <div className="flex flex-row items-center gap-x-2">
        <ViIcon />
        <p>Tiếng Việt</p>
      </div>
    ),
  },
  {
    value: "en",
    label: (
      <div className="flex flex-row items-center gap-x-2">
        <EnIcon />
        <p>English</p>
      </div>
    ),
  },
  {
    value: "cn",
    label: (
      <div className="flex flex-row items-center gap-x-2">
        <CNIcon />
        <p>中国人</p>
      </div>
    ),
  },
];
const Header = () => {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  const { t } = useTranslation("common");
  const [languge, setLanguage] = useState(data[0]);

  return (
    <div className="border-b-[1px] border-[#5427D4] w-full flex flex-row justify-between h-[68px] px-[80px] py-[14px]">
      <div className="flex flex-row items-center justify-center gap-2">
        <Image src="/images/logo.png" width={30} height={40} alt="[ico]" />
        <p className="font-bold text-2xl">Pay Pay</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <Image src="/images/call-icon.png" width={24} height={24} alt="[ico]" />
        <p className="font-bold text-base text-[#5427D4]">{phoneNumber}</p>
        <Select
          suffixIcon={<ArrowDownIcon />}
          allowClear={false}
          className="w-[140px] h-10 rounded-full lang"
          onChange={setLanguage}
          defaultValue={languge}
          options={data}
        />
      </div>
    </div>
  );
};

export default Header;
