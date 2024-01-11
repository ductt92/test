import { Button, Divider, Form, FormInstance } from "antd";
import PPInput from "../common/PPInput";

interface InfoPaymentProps {
  form: FormInstance;
}

const InfoPayment = ({ form }: InfoPaymentProps) => {
  return (
    <div className="border-[1px] rounded-xl p-6">
      <div className="col-span-2 mb-10">
        <p className="text-[#1B1922] font-bold text-base ">
          Bạn đang thanh toán
        </p>
        <p className="text-[#5427D4] font-bold text-3xl mt-1">$450</p>
      </div>
      <Form form={form} className="grid grid-cols-2 gap-y-4">
        <p className="text-[#1B1922] text-base font-bold">Mã đơn hàng</p>
        <p className="text-[#1B1922] text-base text-right break-all">
          1868226680268
        </p>

        <p className="text-[#1B1922] text-base font-bold">Nội dung</p>
        <p className="text-[#1B1922] text-base text-right break-all">
          Thanh toán đơn hàng eCom
        </p>

        <p className="text-[#1B1922] text-base font-bold">Giá trị giao dịch</p>
        <p className="text-[#1B1922] text-base text-right break-all">$500</p>

        <p className="text-[#1B1922] text-base font-bold">Mã khuyển mãi</p>
        <p className="text-[#1B1922] text-base text-right break-all">$40</p>
        <Form.Item className="col-span-2" style={{ margin: 0, padding: 0 }}>
          <PPInput
            placeholder="Nhập mã khuyến mãi"
            style={{ margin: 0, padding: 0 }}
          />
        </Form.Item>

        <p className="text-[#1B1922] text-base font-bold">Phí giao dịch</p>
        <p className="text-[#1B1922] text-base text-right break-all">$10</p>

        <Divider
          className="col-span-2 bg-[#CECCD2]"
          style={{
            margin: 4,
          }}
        />
        <p className="text-[#1B1922] text-base font-bold">Tổng tiền</p>
        <p className="text-[#1B1922] text-base font-bold text-right break-all">
          $450
        </p>

        <div className="col-span-2">
          <Button
            className="w-full text-white font-bold"
            style={{
              background: "#5427D4",
              color: "white",
              height: 44,
              borderRadius: 12,
            }}
          >
            <p className="font-bold"> Tiếp theo</p>
          </Button>

          <div className="font-bold h-[44px] text-center flex items-center justify-center text-[#E32D2D]">
            Hủy đơn hàng
          </div>
        </div>
      </Form>

      <p className="text-center mt-4">
        Đơn hàng sẽ hết hiệu lực thanh toán sau <span className="text-[#5427D4] font-bold">15:00</span>
      </p>
    </div>
  );
};

export default InfoPayment;
