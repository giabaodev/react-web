import { Button, ButtonProps } from '@mui/material';
import clsx from 'clsx';
import { memo } from 'react';

interface IProps extends ButtonProps {
  disabled?: boolean;
  color?: 'secondary' | 'success' | 'error';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

function BButton({ disabled, color, size, className, children, ...props }: IProps): JSX.Element {
  return (
    <Button disabled={disabled} color={color} size={size} className={clsx(className)} {...props}>
      {children}
    </Button>
  );
}

export default memo(BButton);
