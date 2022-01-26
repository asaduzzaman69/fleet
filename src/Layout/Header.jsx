import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  SvgIcon,
  Tooltip,
  Typography,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import classes from '../Layout/Header.module.css';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position='static'
      style={{
        backgroundColor: 'white',
        boxShadow: 'none',
        maxWidth: '1280px',
        display: 'flex',
        margin: '0 auto',
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Image
            src='/assets/logo.svg'
            width='110px'
            height='100px'
            className='logo'
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { md: 'flex' },
              color: 'black',
            }}
          >
            <div className={`${classes.menuitem}`} style={{ marginLeft: 70 }}>
              Travelers
              <SvgIcon
                sx={{
                  marginLeft: 2,
                }}
                viewBox='0 0 384 512'
                fontSize='23'
                width='10'
                height='20'
              >
                <path
                  fill='currentColor'
                  d='M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z'
                ></path>
              </SvgIcon>
            </div>

            <div
              className={`${classes.menuitem}`}
              style={{
                marginInline: 'auto 50px',
              }}
            >
              <Link href='/'>Support</Link>
            </div>

            <div
              className={`${classes.menuitem}`}
              sx={{
                my: 2,
                display: 'block',
              }}
            >
              <SvgIcon
                sx={{
                  marginRight: 2,
                }}
                viewBox='0 0 64 64'
                fontSize='26'
              >
                <path
                  fill='currentColor'
                  d='M58.8 16.9C54.7 9.6 47.6 4.3 39.5 2.2c-2.7-.6-5.1-.9-7.5-.9-2.6 0-5.2.3-7.7 1-8 2.1-15 7.4-19.1 14.7-2.6 4.7-4 9.8-4 15.1v.7C1.3 38.4 3 43.9 6 48.7c4.9 7.7 12.9 12.8 21.8 13.8 1.2.2 2.5.3 4.1.3 1.2 0 2.5-.1 3.8-.2 9.1-1.1 17.2-6.2 22.2-14 3-4.7 4.7-10.1 4.8-15.8V32c.1-5.1-1.3-10.4-3.9-15.1zm-7.5 13.4c-.3-3.4-1.2-6.6-2.5-9.7h7.9c1.4 3.1 2.2 6.4 2.4 9.7h-7.8zm-8.4-13.2h-9.2V6.3c3 2.1 6.1 5.7 9.2 10.8zM30.3 6.2v10.9h-9.7c3.2-5.1 6.5-8.8 9.7-10.9zm0 14.4v9.7H15.7c.3-3.4 1.2-6.7 2.8-9.7h11.8zm0 13.2v12.3h-11c-2.2-3.7-3.4-8-3.6-12.3h14.6zm0 15.8v8.3c-3.1-1.8-6.2-4.7-8.8-8.3h8.8zm3.5 8.3v-8.3H43c-2.5 3.4-5.6 6.3-9.2 8.3zm0-11.8V33.8H48c-.1 4.3-1.1 8.5-3 12.3H33.8zm0-15.8v-9.7H45c1.5 3 2.5 6.3 2.9 9.7H33.8zm21-13.2H47c-3-5-5.8-8.9-8.7-11.6.1 0 .2 0 .4.1 6.6 1.7 12.4 5.8 16.1 11.5zM25.2 5.7h.2c-3 2.7-5.9 6.5-8.9 11.3 0 0 0 .1-.1.1H9.3c3.7-5.7 9.4-9.8 15.9-11.4zM7.3 20.6h7.3c-1.3 3.1-2.1 6.3-2.4 9.7H4.8c.2-3.4 1.1-6.7 2.5-9.7zM4.8 33.8h7.3c.2 4.3 1.2 8.5 3.1 12.3H8.6c-2.2-3.8-3.5-8-3.8-12.3zm6.3 15.8h6.1c2.2 3.4 4.8 6.4 7.5 8.7-5.3-1.4-10-4.5-13.6-8.7zm28.5 8.6c3-2.4 5.5-5.3 7.5-8.6h5.7c-3.5 4.1-8 7.1-13.2 8.6zm15.7-12.1h-6.4c1.7-3.9 2.6-8.1 2.6-12.3h7.7c-.3 4.3-1.6 8.6-3.9 12.3z'
                />
              </SvgIcon>
              Language
            </div>
            <Button
              onClick={handleCloseNavMenu}
              className={`${classes.btn} ${classes.menuitem}`}
              sx={{
                my: 2,
                display: 'block',
                borderRadius: '50px',
                marginInline: '50px',
                paddingInline: '16px',
                boxShadow: '0 0 0 2px #e6e8ec inset',
              }}
            >
              List your property
            </Button>

            <div className={`${classes.menuitem} ${classes.notification}`}>
              <SvgIcon
                sx={{
                  marginRight: 4,
                }}
                viewBox='0 0 448 512'
              >
                <path
                  fill='currentColor'
                  d='M256 32V49.88C328.5 61.39 384 124.2 384 200V233.4C384 278.8 399.5 322.9 427.8 358.4L442.7 377C448.5 384.2 449.6 394.1 445.6 402.4C441.6 410.7 433.2 416 424 416H24C14.77 416 6.365 410.7 2.369 402.4C-1.628 394.1-.504 384.2 5.26 377L20.17 358.4C48.54 322.9 64 278.8 64 233.4V200C64 124.2 119.5 61.39 192 49.88V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32V32zM216 96C158.6 96 112 142.6 112 200V233.4C112 281.3 98.12 328 72.31 368H375.7C349.9 328 336 281.3 336 233.4V200C336 142.6 289.4 96 232 96H216zM288 448C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288z'
                ></path>
              </SvgIcon>
            </div>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt='User'
                  sx={{
                    backgroundColor: '#58C27D',
                  }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
