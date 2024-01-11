"use client";
import { Button, Divider } from "antd";
import Image from "next/image";
import SuccessForm from "./SuccesForm";
import FailedForm from "./FailedForm";

interface PaymentStatusProps {
  isSuccess: boolean;
}

const PaymentStatus = ({ isSuccess }: PaymentStatusProps) => {
  return (
    <div className="bg-payment-status h-[calc(100vh-68px)] bg-no-repeat	bg-contain bg-center ">
      {!isSuccess ? <SuccessForm /> : <FailedForm />}
    </div>
  );
};

export default PaymentStatus;
