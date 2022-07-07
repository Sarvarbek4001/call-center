import React, { useState } from "react";
import {
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const pages = ["Products", "Services", "ABoutUs", "ContactUs"];
const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <React.Fragment>
            <Drawer
                anchor="top"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List sx={{width:'100%',display:"flex",flexDirection:'column'}} >
                        <ListItemButton sx={{display:'inline-block',textAlign:'center'}}>
                            <ListItemIcon>
                                <a href="#" style={{width:'100%',textAlign:"center",textDecoration:'none',fontSize:'18px',padding:'0 20px 0 20px'}} >Home</a>
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton sx={{display:'inline-block',textAlign:'center'}}>
                            <ListItemIcon>
                                <a href="#" style={{textDecoration:'none',fontSize:'18px',padding:'0 20px 0 20px'}}>About Us</a>
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton sx={{display:'inline-block',textAlign:'center'}}>
                            <ListItemIcon>
                                <a href="#price" style={{textDecoration:'none',fontSize:'18px',padding:'0 20px 0 20px'}}>Price</a>
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton sx={{display:'inline-block',textAlign:'center'}}>
                            <ListItemIcon>
                                <a href="#contactus" style={{textDecoration:'none',fontSize:'18px',padding:'0 20px 0 20px'}}>Contact Us</a>
                            </ListItemIcon>
                        </ListItemButton>
                </List>
            </Drawer>
            <IconButton
                sx={{ color: "white", marginLeft: "auto"}}
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <MenuIcon color="white" sx={{fontSize:25}} />
            </IconButton>
        </React.Fragment>
    );
};

export default DrawerComp;
