import { Select, SelectProps } from "antd";
import React, { ReactNode } from "react";

type PPSelectProps = SelectProps & {
  label: string;
  children: ReactNode;
  required?: boolean;
};

export default function PPSelect({
  label,
  children,
  required,
  ...rest
}: PPSelectProps) {
  return (
    <div className="space-y-1">
      <span className="text-sm font-bold">
        {label} {required && <span className="text-red-700">*</span>} :
      </span>
      <Select
        className="rounded-[10px]"
        style={{
          height: 44,
          borderRadius: 12,
        }}
        {...rest}
      >
        {children}
      </Select>
    </div>
  );
}
