import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import DrawerComp from "./Drawer";
import "./navbar.scss"
const Header = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <React.Fragment>
            <AppBar sx={{ background: "#2196f3" }}>
                <div  >
                <Toolbar sx={{display:'flex',maxWidth:'1280px',margin:'0 auto',paddingLeft:'20px',paddingRight:'20px'}}>
                        <Typography sx={{ fontSize: "2rem",  }}>
                            CALL CENTER
                        </Typography>
                        {isMatch ? (
                            <>
                                <DrawerComp />
                            </>
                        ) : (
                            <>
                                <ul className="header__list">
                                        <li className="header__item">
                                            <a className="header__link" href="/" style={{color:'white',textDecoration:"none",fontSize:'18px'}}  >Home</a>
                                        </li>
                                        <li className="header__item">
                                            <a className="header__link" href="#aboutus" style={{color:'white',textDecoration:"none",fontSize:'18px'}}  >About Us</a>
                                        </li>
                                        <li className="header__item">
                                            <a className="header__link" href="#price" style={{color:'white',textDecoration:"none",fontSize:'18px'}}  >Price</a>
                                        </li>
                                        <li className="header__item">
                                            <a className="header__link" href="#contactus" style={{color:'white',textDecoration:"none",fontSize:'18px'}}  >Contact Us</a>
                                        </li>
                                </ul>
                            </>
                        )}
                </Toolbar>
                </div>
            </AppBar>
        </React.Fragment>
    );
};

export default Header;
