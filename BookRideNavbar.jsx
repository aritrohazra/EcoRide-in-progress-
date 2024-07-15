//'use client'
import { Avatar, IconButton, Toolbar, List ,Typography } from '@mui/material';
import {Box} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import {Button} from '@mui/material';
import Drawer from '@mui/material/Drawer'; 
import { drawerList } from './DrawerList';
import React,{useState} from 'react';
const BookRideNavbar = () => {
    const[sidebarOpen, setSideBarOpen]=useState(false);

    const handleSidebarClose=()=>setSideBarOpen(false);
    const handleSidebarOpen=()=>setSideBarOpen(true);
  return (
    <Box className="">
      <AppBar
        sx={{ backgroundColor: "#120E43" }}
        className=""
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ER Cab
          </Typography>

          {true  ? (
            <Avatar
              className="cursor-pointer"
              /*onClick={()=>Router.push("/profile")}*/
              sx={{ bgcolor: deepOrange[500] }}
            >
              A
            </Avatar>
            ) : (
            <Button /*onClick={()=> Router.push("login")}*/ color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor={"left"} open={sidebarOpen} onClose={handleSidebarClose}>
        {drawerList("left")}
      </Drawer>
    </Box>
  );
};

export default BookRideNavbar;
