import React, { InputHTMLAttributes } from 'react';
import { ShadcnInput } from '../ui/input';
import { Label } from '../ui/label';

type InputComponentProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: React.ReactNode;
  name?: string;
  requiredLabel?: boolean;
  placeHolder?: string;
};

const Input = React.memo(
  ({
    label,
    name,
    requiredLabel,
    placeHolder,
    ...otherProps
  }: InputComponentProps) => {
    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        {label && (
          <Label htmlFor={name}>
            {label}
            {requiredLabel && <span> *</span>}
          </Label>
        )}
        <ShadcnInput
          id={name}
          name={name}
          placeholder={placeHolder}
          {...otherProps}
        />
      </div>
    );
  },
);

export default Input;
