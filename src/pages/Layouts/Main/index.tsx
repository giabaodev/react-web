import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
