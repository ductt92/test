"use client";
import { Form } from "antd";
import PaymentMethod from "./PaymentMethod";
import InfoPayment from "./InfoPayment";

const HomePageContainer = () => {
  const [paymentForm] = Form.useForm();
  return (
    <div className="px-[80px]">
      <p className="text-[#1B1922] font-bold text-3xl my-8">
        Chọn phương thức thanh toán
      </p>
      <div className="grid grid-cols-5 gap-24">
        <div className="col-span-3">
          <PaymentMethod form={paymentForm} />
        </div>
        <div className="col-span-2">
          <InfoPayment form={paymentForm} />
        </div>
      </div>
    </div>
  );
};

export default HomePageContainer;
