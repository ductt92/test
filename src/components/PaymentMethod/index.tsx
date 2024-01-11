"use-client";
import { Form, FormInstance, Radio, Select } from "antd";
import Image from "next/image";
import PPInput from "../common/PPInput";
import PPSelect from "../common/PPSelect";
import ArrowDownIcon from "../icons/arrow-down.icon";
import PPDatePicker from "../common/PPDatePicker";
import { DATE_FOMART } from "@/utils/contants.common";
import BIDVIcon from "../icons/bidv.icon";
import VietComIcon from "../icons/vietcom.icon";

interface PaymentMethodProps {
  form: FormInstance;
}
const { Option } = Select;

const PaymentMethod = ({ form }: PaymentMethodProps) => {
  const dataOpition = [
    {
      value: "bidv",
      label: (
        <div className="flex flex-row items-center gap-x-2">
          <BIDVIcon />
          <p> BIDV - Ngân hàng TMCP Đầu tư và Phát triển Việt Nam</p>
        </div>
      ),
    },
    {
      value: "Vietcombank",
      label: (
        <div className="flex flex-row items-center gap-x-2">
          <VietComIcon />
          <p> Vietcombank - Ngân hàng TMCP Ngoại thương Việt Nam</p>
        </div>
      ),
    },
    {
      value: "Viettinbank",
      label: (
        <div className="flex flex-row items-center gap-x-2">
          <Image
            src={"/images/viettin.png"}
            width={24}
            height={24}
            alt="[ico]"
          />
          <p> VietinBank - Ngân hàng TMCP Công thương Việt Nam</p>
        </div>
      ),
    },
    {
      value: "vpbank",
      label: (
        <div className="flex flex-row items-center gap-x-2">
          <Image
            src={"/images/vp-bank.png"}
            width={24}
            height={24}
            alt="[ico]"
          />
          <p> VPBank - Ngân hàng Thịnh Vượng Việt Nam</p>
        </div>
      ),
    },
  ];
  return (
    <Form form={form} className="mt-5" initialValues={{ paymentMethod: 1 }}>
      <Form.Item name={"paymentMethod"}>
        <Radio.Group name="radiogroup">
          <Radio
            value={1}
            className="border-[1px] h-[94px] rounded-xl pp-select flex flex-row justify-center items-center radioPaypay"
          >
            <Image
              src="/images/VietQR.png"
              width={108}
              height={32}
              alt="[ico]"
              className="ml-4"
            />
          </Radio>
          <Radio
            value={2}
            className="border-[1px] h-[94px] rounded-xl pp-select flex flex-row justify-center items-center"
          >
            <Image
              src="/images/NAPAS.png"
              width={108}
              height={32}
              alt="[ico]"
              className="ml-4"
            />
          </Radio>
          <Radio
            value={3}
            className="border-[1px] h-[94px] rounded-xl pp-select flex flex-row justify-center items-center"
          >
            <Image
              src="/images/VISA.png"
              width={108}
              height={32}
              alt="[ico]"
              className="ml-4"
            />
          </Radio>
        </Radio.Group>
      </Form.Item>

      <div className=" bg-white gap-2 grid grid-cols-2 border-[1px] rounded-xl p-8 shadow-sm">
        <Form.Item className="col-span-2">
          <PPSelect
            label="Chọn ngân hàng"
            placeholder="--Chọn ngân hàng--"
            suffixIcon={<ArrowDownIcon />}
          >
            {dataOpition.map((v, i) => (
              <Option key={i} value={v.value}>
                {v.label}
              </Option>
            ))}
          </PPSelect>
        </Form.Item>

        <Form.Item className="col-span-2">
          <PPInput label="Số thẻ ATM" placeholder="Số thẻ ATM" />
        </Form.Item>

        <Form.Item className="col-span-2">
          <PPInput label="Tên chủ thẻ" placeholder="Tên chủ thẻ" />
        </Form.Item>

        <Form.Item className="col-span-1">
          <PPDatePicker
            label="Ngày hiệu lực"
            format={DATE_FOMART}
            placeholder="MM/YY"
          />
        </Form.Item>
      </div>
    </Form>
  );
};

export default PaymentMethod;
