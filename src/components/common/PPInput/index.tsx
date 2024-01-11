import { Input, InputProps } from "antd";
import React from "react";

type PPInputProps = InputProps & {
  label?: string;
  required?: boolean;
};

export default function PPInput({ label, required, ...rest }: PPInputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <span className="font-bold text-sm">
          {label} {required && <span className="text-red-700">*</span>}
        </span>
      )}
      <Input {...rest} style={{ borderRadius: 12, height: 44 }} />
    </div>
  );
}
