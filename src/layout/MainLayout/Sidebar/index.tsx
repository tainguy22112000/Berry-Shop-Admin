import React from 'react';
import { Box, Drawer, useMediaQuery } from '@mui/material';
// material-ui
import { useTheme } from '@mui/material/styles';
import { BrowserView, MobileView } from 'react-device-detect';
// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';
import { drawerWidth } from '../../../store/constant';

import LogoSection from '../LogoSection';
import MenuCard from './MenuCard';
// project imports
import MenuList from './MenuList';

// ==============================|| SIDEBAR DRAWER ||============================== //
type Props = {
  drawerOpen: boolean;
  drawerToggle(input?: any): void;
  window?: Record<any, string>;
};

const Sidebar = ({ drawerOpen, drawerToggle, window }: Props) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

  const drawer = (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
          <LogoSection />
        </Box>
      </Box>
      <BrowserView>
        <PerfectScrollbar
          component="div"
          style={{
            height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
            paddingLeft: '16px',
            paddingRight: '16px',
          }}
        >
          <MenuList />
          <MenuCard />
        </PerfectScrollbar>
      </BrowserView>
      <MobileView>
        <Box sx={{ px: 2 }}>
          <MenuList />
          <MenuCard />
        </Box>
      </MobileView>
    </>
  );

  const container =
    // @ts-ignore
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant={matchUpMd ? 'persistent' : 'temporary'}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: 'none',
            [theme.breakpoints.up('md')]: {
              top: '88px',
            },
          },
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
