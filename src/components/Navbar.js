import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "./images/lirra_logo_white.png";
import { clearLocalStorage, getLocalStorage } from "../utilities";

const pages = [
 { name: "Home", path: "/home" },
 { name: "Search", path: "/search" },
 { name: "My Recommendations", path: "/my-recommendations" },
];

const recommendOptions = [
 { name: "Book", path: "/recommend-book" },
 { name: "E-Book", path: "/recommend-ebook" },
 { name: "Multi-Media Materials", path: "/recommend-multimedia" },
 { name: "Magazine", path: "/recommend-magazine" },
];

const settings = [{ name: "Logout", path: "/logout" }];

function ResponsiveAppBar() {
 const [anchorElNav, setAnchorElNav] = React.useState(null);
 const [anchorElUser, setAnchorElUser] = React.useState(null);
 const [anchorElRecommend, setAnchorElRecommend] = React.useState(null);
 const [user, setUser] = useState("");

 const handleOpenNavMenu = (event) => {
  setAnchorElNav(event.currentTarget);
 };
 const handleOpenUserMenu = (event) => {
  setAnchorElUser(event.currentTarget);
 };
 const handleOpenRecommendMenu = (event) => {
  setAnchorElRecommend(event.currentTarget);
 };

 const handleCloseNavMenu = () => {
  setAnchorElNav(null);
 };

 const handleCloseUserMenu = () => {
  setAnchorElUser(null);
 };

 const handleCloseRecommendMenu = () => {
  setAnchorElRecommend(null);
 };

 const handleLogOut = () => {
  clearLocalStorage("user");
 };

 useEffect(() => {
  const user = JSON.parse(getLocalStorage("user"));
  if (user) {
   setUser(`${user.first_name}`);
  }
 }, []);

 return (
  <AppBar
   position="static"
   style={{ backgroundColor: "#1D2C44" }}
   sx={{ py: 2 }}
  >
   <Container maxWidth="xl">
    <Toolbar disableGutters>
     <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <img src={Logo} alt="LiRRa logo" width={80} />
     </Box>
     <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
       size="large"
       aria-label="account of current user"
       aria-controls="menu-appbar"
       aria-haspopup="true"
       onClick={handleOpenNavMenu}
       color="inherit"
      >
       <MenuIcon />
      </IconButton>
      <Menu
       id="menu-appbar"
       anchorEl={anchorElNav}
       anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
       }}
       keepMounted
       transformOrigin={{
        vertical: "top",
        horizontal: "left",
       }}
       open={Boolean(anchorElNav)}
       onClose={handleCloseNavMenu}
       sx={{
        display: { xs: "block", md: "none" },
       }}
      >
       {pages.map((page) => (
        <MenuItem
         key={page.name}
         onClick={handleCloseNavMenu}
         component={Link}
         to={page.path}
        >
         <Typography textAlign="center">{page.name}</Typography>
        </MenuItem>
       ))}
       <MenuItem onClick={handleOpenRecommendMenu}>
        <Typography textAlign="center">Recommend</Typography>
       </MenuItem>
       <Menu
        id="recommend-menu"
        anchorEl={anchorElRecommend}
        anchorOrigin={{
         vertical: "bottom",
         horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
         vertical: "top",
         horizontal: "left",
        }}
        open={Boolean(anchorElRecommend)}
        onClose={handleCloseRecommendMenu}
        sx={{ display: { xs: "block", md: "none" } }}
       >
        {recommendOptions.map((option) => (
         <MenuItem
          key={option.name}
          onClick={handleCloseRecommendMenu}
          component={Link}
          to={option.path}
         >
          <Typography textAlign="center">{option.name}</Typography>
         </MenuItem>
        ))}
       </Menu>
      </Menu>
     </Box>
     <Box
      sx={{
       flexGrow: 1,
       display: { xs: "none", md: "flex" },
       justifyContent: "flex-end",
      }}
     >
      {pages.map((page) => (
       <Button
        key={page.name}
        component={Link}
        to={page.path}
        onClick={handleCloseNavMenu}
        sx={{
         my: 2,
         mx: 2,
         color: "white",
         display: "block",
         fontFamily: "Work Sans",
         textTransform: "none",
        }}
       >
        {page.name}
       </Button>
      ))}
      <Button
       sx={{
        my: 2,
        mx: 2,
        color: "white",
        display: "block",
        fontFamily: "Work Sans",
        textTransform: "none",
       }}
       onClick={handleOpenRecommendMenu}
      >
       Recommend
      </Button>
      <Menu
       id="recommend-menu-desktop"
       anchorEl={anchorElRecommend}
       anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
       }}
       keepMounted
       transformOrigin={{
        vertical: "top",
        horizontal: "right",
       }}
       open={Boolean(anchorElRecommend)}
       onClose={handleCloseRecommendMenu}
      >
       {recommendOptions.map((option) => (
        <MenuItem
         key={option.name}
         onClick={handleCloseRecommendMenu}
         component={Link}
         to={option.path}
        >
         <Typography textAlign="center">{option.name}</Typography>
        </MenuItem>
       ))}
      </Menu>
     </Box>

     <Box sx={{ display: "flex", alignItems: "center", ml: 12 }}>
      <Tooltip title="Open settings">
       <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
       </IconButton>
      </Tooltip>
      <Button
       sx={{
        color: "white",
        fontFamily: "Work Sans",
        ml: 2,
        textTransform: "none",
       }}
      >
       Hello, {user && user}!
      </Button>
      <Menu
       sx={{ mt: "45px" }}
       id="menu-appbar"
       anchorEl={anchorElUser}
       anchorOrigin={{
        vertical: "top",
        horizontal: "right",
       }}
       keepMounted
       transformOrigin={{
        vertical: "top",
        horizontal: "right",
       }}
       open={Boolean(anchorElUser)}
       onClose={handleCloseUserMenu}
      >
       {settings.map((setting) => (
        <MenuItem
         key={setting.name}
         onClick={() => {
          if (setting.name === "Logout") {
           handleLogOut();
          }
         }}
         component={Link}
         to={setting.path}
        >
         <Typography textAlign="center">{setting.name}</Typography>
        </MenuItem>
       ))}
      </Menu>
     </Box>
    </Toolbar>
   </Container>
  </AppBar>
 );
}

export default ResponsiveAppBar;
