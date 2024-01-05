import { MailOutlined } from '@mui/icons-material';
import { Link } from '@mui/material';
import { ReactNode } from 'react';
import styles from '../styles.module.scss';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.headerBlock}>
          <img src="logo.png" alt="logo" width={80} height={80} />
          <p>Đăng xuất</p>
        </div>
        <main className={styles.containerBlock}>{children}</main>
        <div className={styles.footerBlock}>
          <MailOutlined style={{ width: '15px', height: '15px' }} />
          <Link href="mailto:ngbaodev@gmail.com">ngbaodev@gmail.com</Link>
        </div>
      </div>
    </>
  );
}
