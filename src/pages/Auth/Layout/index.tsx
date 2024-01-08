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
        </div>
      </div>
    </>
  );
}
