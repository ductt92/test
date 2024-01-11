import { Button } from "antd";
import Image from "next/image";

const FailedForm = () => {
  return (
    <div>
      <div className="mt-[100px] flex items-center flex-row justify-center">
        <Image src="/images/failed.png" alt="[ico]" width={250} height={250} />
      </div>
      <div className="text-center mt-12">
        <p className="text-[#1B1922] font-bold text-2xl">
          Thanh toán không thành công!
        </p>
        <p>
          Giao dịch bị từ chối. Vui lòng liên hệ ngân hàng phát hành để biết
          thêm chi tiết.
        </p>
        <p>
          Hệ thống sẽ tự động quay về trang{" "}
          <span className="text-[#5427D4]">Merchant Site</span> sau{" "}
          <span className="text-[#5427D4]">15</span> giây
        </p>
        <div className="max-w-[600px] m-auto mt-10">
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
        </div>
      </div>
    </div>
  );
};
export default FailedForm;
