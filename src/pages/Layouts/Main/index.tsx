import { Drawer, List, ListItem } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <Drawer open variant="permanent">
          <div>
            <List>
              <ListItem disablePadding>abc</ListItem>
            </List>
          </div>
        </Drawer>
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
