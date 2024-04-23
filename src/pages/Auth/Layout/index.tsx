import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <main className='h-screen'>{children}</main>
    </div>
  );
}
