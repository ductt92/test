import { Button, Divider } from "antd";
import Image from "next/image";

const SuccessForm = () => {
  return (
    <div>
      <div className="mt-[100px] flex items-center flex-row justify-center">
        <Image src="/images/success.png" alt="[ico]" width={250} height={250} />
      </div>
      <div className="text-center mt-12 ">
        <p className="text-[#1B1922] font-bold text-2xl">
          Thanh toán thành công!
        </p>
        <p className="text-[#5427D4] font-bold text-3xl mt-[10px]">$450</p>
      </div>

      <div className="grid grid-cols-2 max-w-[600px] m-auto mt-7 gap-y-4">
        <p className="text-[#1B1922] text-base font-bold">Mã đơn hàng</p>
        <p className="text-[#1B1922] text-base text-right break-all">
          1868226680268
        </p>

        <p className="text-[#1B1922] text-base font-bold">
          Thời gian thanh toán
        </p>
        <p className="text-[#1B1922] text-base text-right break-all">
          12 -22-2023, 02.21 AM
        </p>

        <p className="text-[#1B1922] text-base font-bold">
          Phương thức thanh toán
        </p>
        <p className="text-[#1B1922] text-base text-right break-all">
          Thẻ ATM BIDV
        </p>
        <Divider
          className="col-span-2 bg-[#CECCD2] "
          style={{
            margin: 2,
          }}
        />

        <p className="text-[#1B1922] text-base font-bold">Tổng tiền</p>
        <p className="text-[#1B1922] text-base font-bold text-right break-all">
          $450
        </p>

        <Button
          className="w-full text-white font-bold col-span-2"
          style={{
            background: "#5427D4",
            color: "white",
            height: 44,
            borderRadius: 12,
          }}
        >
          <p className="font-bold">Quay về ngay</p>
        </Button>

        <p className="col-span-2 text-center">
          Hệ thống sẽ tự động quay về trang{" "}
          <span className="text-[#5427D4]">Merchant Site</span> sau{" "}
          <span className="text-[#5427D4]">15</span> giây
        </p>
      </div>
    </div>
  );
};

export default SuccessForm;
