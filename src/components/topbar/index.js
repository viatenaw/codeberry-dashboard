import { AppBar, Toolbar, IconButton } from '@mui/material';
import { BiSearch } from 'react-icons/bi'
import { AiFillSetting } from 'react-icons/ai'
import userImage from '../../assests/Josh.jpeg'
import { IoIosNotifications } from 'react-icons/io'

export const Topbar = (props) => {
  const { innerWidth: width } = window;
  return (
    <AppBar position="absolute" sx={{ position: 'fixed', left: '280px', boxShadow: 'none', background: '#FFFFFF', maxWidth: width - 280 }}>
      <Toolbar sx={{
        justifyContent: 'flex-end',
      }}>
        <IconButton
          aria-label="open drawer"
          sx={{
            position: 'absolute',
            left: '0px'
          }}
        >
          <BiSearch />
        </IconButton>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1em'
          }}
        >
          <img
            src='https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png'
            alt='countryFlag'
            style={{
              height: '20px',
              width: '28px'
            }}
          />
          <IconButton
            aria-label="open drawer"
          >
            <AiFillSetting />
          </IconButton>
          <IconButton
            aria-label="open drawer"
          >
            <IoIosNotifications />
          </IconButton>
          <img
            src={userImage}
            style={{
              height: '40px',
              width: '40px',
              borderRadius: '50%'
            }}
            alt='displayPicture' />
        </div>
      </Toolbar>
    </AppBar>
  )
}