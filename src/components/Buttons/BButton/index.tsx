import { Button, ButtonProps } from '@mui/material';
import clsx from 'clsx';
import styles from './styles.module.scss';

interface IProps extends ButtonProps {
  bType?: 'primary' | 'danger' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

function BButton({ bType = 'primary', size = 'large', children, ...props }: IProps): JSX.Element {
  const stylesClass = clsx(
    bType === 'primary' && styles.primaryButton,
    bType === 'danger' && styles.dangerButton,
    bType === 'secondary' && styles.secondaryButton,
    size === 'small' && styles.btnSmall,
    size === 'medium' && styles.btnMedium,
    size === 'large' && styles.btnLarge,
  );

  return (
    <Button className={clsx(stylesClass)} {...props}>
      {children}
    </Button>
  );
}

export default BButton;
