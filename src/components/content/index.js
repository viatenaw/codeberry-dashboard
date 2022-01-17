import { Typography } from '@mui/material'

export const Content = (props) => {
  return (
    <div style={{
      position: 'absolute',
      left: '280px',
      top: '5em'
    }}>
      <div style={{ textAlign: 'start', paddingLeft: '2em' }}>
        <Typography component="div" sx={{ fontSize: '24px', color: '#212B36' }}>
          User Cards
        </Typography>
        <Typography variant="body2" sx={{ color: '#212B36' }} component="div">
          Dashboard
        </Typography>
      </div>
    </div>
  )
}
