import React, { Suspense, lazy, useState } from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography, Tooltip, Backdrop } from "@mui/material";
import { orange } from '../../../Constants/Color';
import { Add as AddIcon, Logout as LogoutIcon, Menu as MenuIcon, Group as GroupIcon, Search as SearchIcon, Notifications as NotificationIcon } from "@mui/icons-material";  // Correct import for Menu icon
import { useNavigate } from 'react-router-dom';


   const Search = lazy(() => import("./../Specific/Search"))
   const Notifications = lazy(() => import("./../Specific/Notifications"))
   const NewGroup = lazy(() => import("./../Specific/NewGroup"))


    const Header = () => {
    const navigate = useNavigate();

    const [ismobile, setIsMobile] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [isNewGroup, setIsNewGroup] = useState(false);
    const [isNotification, setIsNotification] = useState(false);

    const handleMobile = () => {
        setIsMobile(prev => !prev);
    };
    const OpenSearch = () => {
        setIsSearch(prev => !prev);
    };
    const OpenNewGroup = () => {
        setIsNewGroup(prev => !prev);
    };
    const LogOutHandler = () => {
        console.log("log out");
    };
    const openNotification = () => {
        setIsNotification(prev => !prev);
    };

    const NavigateToGroup = () => navigate("/Groups");

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static'
                    sx={{
                        background: orange,
                    }}
                >   <Toolbar>
                        <Typography
                            variant='h6'
                            sx={{
                                display: { xs: "none", sm: "block" },
                            }}
                        >
                            chat app
                        </Typography>
                        <Box
                            sx={{
                                display: { xs: "block", sm: "none" },
                            }}>
                            <IconButton color='inherit' onClick={handleMobile}>
                                <MenuIcon />  {/* Render Menu icon */}
                            </IconButton>
                        </Box>
                        <Box sx={{
                            flexGrow: 1,
                        }} />
                        <Box>
                            <IconBtn
                                title={"Search"}
                                icon={<SearchIcon />}
                                onClick={OpenSearch}
                            />
                            <IconBtn
                                title={"New Group"}
                                icon={<AddIcon />}
                                onClick={OpenNewGroup}
                            />
                            <IconBtn
                                title={"Manage Group"}
                                icon={<GroupIcon />}
                                onClick={NavigateToGroup}
                            />
                            <IconBtn
                                title={"Notification"}
                                icon={<NotificationIcon />}
                                onClick={openNotification}
                            />
                            <IconBtn
                                title={"LogOut"}
                                icon={<LogoutIcon />}
                                onClick={LogOutHandler}
                            />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            {isSearch && (
                <Suspense fallback={<Backdrop open/>}>
                    <Search />
                </Suspense>
            )}
            {isNotification
                && (
                <Suspense fallback={<Backdrop open/>}>
                        <Notifications />
                    </Suspense>
                )}
            {isNewGroup && (
                <Suspense fallback={<Backdrop open/>}>
                    <NewGroup />
                </Suspense>
            )}
        </>
    );
};

const IconBtn = ({ title, icon, onClick }) => {
    return (
        <Tooltip title={title}>
            <IconButton color="inherit" size="large" onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>
    );
};

export default Header;
