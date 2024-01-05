import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

interface IProps {
  text?: string;
}

export default function PageWaiting({ text = 'Waiting...' }: IProps) {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <div className={styles.block}>
        <div className={styles.lds_ring}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className={styles.textStyle}>{t(text)}</p>
      </div>
    </div>
  );
}
