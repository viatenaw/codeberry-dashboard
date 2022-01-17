import { useState } from 'react';
import { List, Box, Card, Typography, ListSubheader, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { BiChevronDown, BiChevronRight, BiTachometer } from 'react-icons/bi'
import { HiUser } from 'react-icons/hi'
import { BsDot } from 'react-icons/bs'
import userImage from '../../assests/Josh.jpeg'
// import logo from '../../assests/ic_user.svg';

export const Sidebar = (props) => {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <Card sx={{ background: '#F4F6F8', boxShadow: 'none', borderRadius: '12px', display: 'flex', ml: 1, mt: 8, padding: '16px 10px', mb: 5, alignItems: 'center', maxWidth: '240px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <img 
                        src={userImage}
                        style= {{
                        height: '40px',
                        width: '40px',
                        borderRadius: '50%' }}
                        alt='displayPicture' />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'start', ml: 1 }}>
                    <div sx={{ pb: 0 }}>
                        <Typography component="div" variant="body2">
                            Carlota Monteiro
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div">
                            Admin
                        </Typography>
                    </div>
                </Box>
            </Card>
            <List
                sx={{ width: '100%', maxWidth: '279px', bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={<ListSubheader component="div" sx={{ textAlign: 'start', pl: 5, fontWeight: 700, color: '#212B36', letterSpacing: '1.2px' }} id="nested-list-subheader">
                    GENERAL
                </ListSubheader>}
            >
                <ListItemButton sx={{ pl: 3, color: '#637381', fontWeight: 500 }}>
                    <ListItemIcon sx={{ justifyContent: 'center', fontSize: 'x-large' }}>
                        <BiTachometer />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
            </List>
            <List
                sx={{ width: '100%', maxWidth: '279px', bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={<ListSubheader component="div" sx={{ textAlign: 'start', pl: 5, fontWeight: 700, color: '#212B35', letterSpacing: '1.2px' }} id="nested-list-subheader">
                    MANAGEMENT
                </ListSubheader>}
            >
                <ListItemButton sx={{ pl: 3, color: '#00AB55', fontWeight: 600, borderRight: '3px solid #00AB55' }} onClick={handleClick} >
                    <ListItemIcon sx={{ justifyContent: 'center', fontSize: 'x-large' }}>
                        <HiUser color='#00AB55' />
                        {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                    {open ? <BiChevronDown /> : <BiChevronRight />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4, color: '#637381', fontWeight: 500 }}>
                            <ListItemIcon sx={{ justifyContent: 'center' }}>
                                <BsDot color='#637381' />
                            </ListItemIcon>
                            <ListItemText primary="Create" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, color: '#212B36', fontWeight: 600 }}>
                            <ListItemIcon sx={{ justifyContent: 'center', fontSize: 'xxx-large' }}>
                                <BsDot color='#00AB55' />
                            </ListItemIcon>
                            <ListItemText primary="Cards" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, color: '#637381', fontWeight: 500 }}>
                            <ListItemIcon sx={{ justifyContent: 'center' }}>
                                <BsDot color='#637381' />
                            </ListItemIcon>
                            <ListItemText primary="List" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, color: '#637381', fontWeight: 500 }}>
                            <ListItemIcon sx={{ justifyContent: 'center' }}>
                                <BsDot color='#637381' />
                            </ListItemIcon>
                            <ListItemText primary="Account" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </>
    );
}