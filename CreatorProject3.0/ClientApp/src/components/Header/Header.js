import { useState } from "react";
import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography, Button, Tooltip, Avatar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


const pages = [
  {
    text: "home",
    link: "/"
  },
  {
    text: "counter",
    link: "/counter"
  },
  {
    text: "publication",
    link: "/publication"
  }
]

const Header = () => {

  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar 
      position="fix" className="appBar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Typography 
          variant="h6"
          noWrap
          sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              margin: '15px',
            }}>
          Creator.
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit">
            
            <MenuIcon />
          </IconButton>
          <Menu
              id="menu-header"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
              {pages.map((page, index) => {
                return(
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.text}</Typography>
                    {/* <NavLink tag ={Link} to = {page.link}></NavLink> */}
                  </MenuItem>
                );
              })}
          </Menu>
        </Box>

        <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
            }}
          >
            Creator.
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => {
              return(
                <Button
                  key={index}
                  variant="text"
                  onClick={handleCloseNavMenu}
                  href={page.link}
                  sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none' }}>
                    {page.text}
                </Button>
              )
            })}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Avatar" src="#"></Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
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
              onClose={handleCloseUserMenu}>
              {pages.map((page, index) => {
                return(
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.text}</Typography>
                    {/* <NavLink tag ={Link} to = {page.link}></NavLink> */}
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;