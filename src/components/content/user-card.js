import { Card, CardContent, Typography, CardActions, IconButton, Divider } from '@mui/material';
import curve from '../../assests/curve.svg';
import { FaFacebookF, FaPenSquare, FaInstagramSquare, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export const UserCard = ({ card, editCard }) => {
  const numFormatter = num => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
  }
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: '16px',
        boxShadow: '0px 0px 2px rgba(145, 158, 171, 0.24), 0px 16px 32px -4px rgba(145, 158, 171, 0.24)',
        position: 'relative',
        flexShrink: 0
      }}>
       <IconButton
        onClick={_=> editCard(card)}
        sx={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          zIndex: 99
        }}>
          <FaPenSquare/>
        </IconButton> 
      <div style={{ position: 'relative' }}>
        <div
          style={{
            width: '344px',
            height: '194px',
            backgroundImage: `linear-gradient(
              rgba(0, 82, 73, 0.72), 
              rgba(0, 82, 73, 0.72)
            ),url(${card.cover})`
          }}
        />
        <img src={curve} alt="logo" style={{
          position: 'absolute',
          top: '52.5%',
          left: '50%',
          transform: 'translateX(-50%)',
        }} />
        <img src={card.avatar}
          alt="logo" style={{
            position: 'absolute',
            top: '54%',
            left: '50%',
            height: '64px',
            width: '64px',
            transform: 'translateX(-50%)',
            borderRadius: '50%'
          }} />
        <CardContent sx={{ pt: 5 }}>
          <Typography gutterBottom variant="body2" component="div">
            {card.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {card.role}
          </Typography>
        </CardContent>
      </div>
      <CardActions sx={{ justifyContent: 'center', gap: '1em' }}>
        <a href={card.fb} rel="noopener noreferrer" target="_blank">
          <IconButton size="small" sx={{ color: '#1877F2' }}><FaFacebookF /></IconButton>
        </a>
        <a href={card.insta} rel="noopener noreferrer" target="_blank">
          <IconButton size="small" sx={{ color: '#E02D69' }}><FaInstagramSquare /></IconButton>
        </a>
        <a href={card.linkedin} rel="noopener noreferrer" target="_blank">
          <IconButton size="small" sx={{ color: '#007EBB' }}><FaLinkedinIn /></IconButton>
        </a>
        <a href={card.twitter} rel="noopener noreferrer" target="_blank">
          <IconButton size="small" sx={{ color: '#00AAEC' }}><FaTwitter /></IconButton>
        </a>
      </CardActions>
      <Divider />
      <CardActions sx={{ justifyContent: 'center', gap: '3em' }}>
        <div>
          <Typography gutterBottom sx={{ color: '#637381' }} variant="body2" component="div">
            Follower
          </Typography>
          <Typography sx={{ fontWeight: 600, color: '#212B36'}} variant="body2" color="text.secondary">
            {numFormatter(card.followers)}
          </Typography>
        </div>
        <div>
          <Typography gutterBottom sx={{ color: '#637381' }} variant="body2" component="div">
            Following
          </Typography>
          <Typography sx={{ fontWeight: 600, color: '#212B36'}} variant="body2" color="text.secondary">
            {numFormatter(card.following)}
          </Typography>
        </div>
        <div>
          <Typography gutterBottom sx={{ color: '#637381' }} variant="body2" component="div">
            Total Posts
          </Typography>
          <Typography sx={{ fontWeight: 600, color: '#212B36'}} variant="body2" color="text.secondary">
            {numFormatter(card.posts)}
          </Typography>
        </div>
      </CardActions>
    </Card>
  )
}