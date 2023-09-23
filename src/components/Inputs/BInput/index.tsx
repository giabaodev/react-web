import { TextField, TextFieldProps, styled } from '@mui/material';
import clsx from 'clsx';
import styles from './styles.module.scss';

type ITextInputCpnProps = TextFieldProps & {
  name?: string;
  label?: string;
  isBoldLabel?: boolean;
  isRequiredLabel?: boolean;
};

const TextFieldCpn = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: 8,
    background: '#FFFFFF',
    '&.Mui-focused fieldset': {
      borderColor: '#7CD4FD',
      boxShadow: '0px 0px 0px 3px #E0F2FE, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    },
  },
});

export default function BInput({ name = '', label, isBoldLabel, isRequiredLabel, ...props }: ITextInputCpnProps) {
  return (
    <>
      {label && (
        <>
          <label htmlFor={name} className={clsx(styles.label, isBoldLabel && styles.bold)}>
            {label}
            {isRequiredLabel && <span className={styles.labelRequired}> (*)</span>}
          </label>
        </>
      )}
      <TextFieldCpn size="small" variant="outlined" className={styles.input} {...props} />
    </>
  );
}
