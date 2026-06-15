import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import UserMenu from '../UserMenu/UserMenu.jsx';
import AuthNav from '../AuthNav/AuthNav.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import { NavLink } from 'react-router-dom';
import Favorite from '../Favorite/Favorite.jsx';
import { selectFavouriteContacts } from '../../redux/contacts/selectors.js';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [open, setOpen] = React.useState(false);
  const favorites = useSelector(selectFavouriteContacts);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <MuiAppBar
      position="fixed"
      enableColorOnDark
      sx={{
        backgroundColor: 'transparent',
        color: 'primary.main',
        boxShadow: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar
          variant="dense"
          disableGutters
          sx={{
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '2px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '-4px 2px 43px 2px rgba(0,0,0,0.31)',
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <Navigation />
          </Box>
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
              gap: 1,
              alignItems: 'center',
            }}
          >
            {isLoggedIn ? <UserMenu favorites={favorites} /> : <AuthNav />}
          </Box>
          <Box
            sx={{
              display: {
                xs: 'flex',
                md: 'none',
                backgroundColor: 'transparent',
              },
              gap: 1,
            }}
          >
            {isLoggedIn && <Favorite isFav={favorites} />}
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ fontSize: '24px' }} />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(4px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow:
                    '0 20px 60px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
                  borderRadius: '0px 0px 10px 10px',
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box
                sx={{
                  p: 2,
                  color: 'white',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon sx={{ color: '#fff' }} />
                  </IconButton>
                </Box>
                <MenuItem
                  component={NavLink}
                  to="/"
                  onClick={toggleDrawer(false)}
                >
                  Home
                </MenuItem>
                <MenuItem
                  component={NavLink}
                  to="/contacts"
                  onClick={toggleDrawer(false)}
                >
                  Contacts
                </MenuItem>
                <Divider sx={{ my: 3 }} />
                {isLoggedIn ? (
                  <UserMenu />
                ) : (
                  <>
                    <MenuItem
                      color="inherit"
                      variant="outlined"
                      fullWidth
                      component={NavLink}
                      to="/register"
                      onClick={toggleDrawer(false)}
                    >
                      Sign up
                    </MenuItem>
                    <MenuItem
                      color="inherit"
                      variant="outlined"
                      fullWidth
                      component={NavLink}
                      to="/login"
                      onClick={toggleDrawer(false)}
                    >
                      Sign in
                    </MenuItem>
                  </>
                )}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </MuiAppBar>
  );
};
export default AppBar;
