import { DatePicker, DatePickerProps } from "antd";
import React from "react";

type PPDatePickerProps = DatePickerProps & {
  label?: string;
  required?: boolean;
};

export default function PPDatePicker({
  required,
  label,
  ...rest
}: PPDatePickerProps) {
  return (
    <div className="flex flex-col space-y-4">
      <span className="text-sm font-bold">
        {label && (
          <span>
            {label}
            {required && <span className="text-red-700">*</span>} :
          </span>
        )}
      </span>
      <DatePicker
        className="block rounded-[10px]"
        {...rest}
        style={{ height: 44, borderRadius: 12 }}
      />
    </div>
  );
}
