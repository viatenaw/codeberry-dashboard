import { Box } from '@mui/material';
import { Sidebar } from './components/sidebar'
import { Topbar } from './components/topbar'
import { Content } from './components/content'

export const Dashboard = (props) => {  
  return (
    <Box sx={{ display: 'flex' }}>
      <Topbar />
      <div
        variant="permanent"
        style={{
          boxShadow: 'inset -1px 0px 0px rgb(145 158 171 / 24%)',
          minWidth: '280px',
          borderRight: 'none',
          height: '100vh'
        }}>
        <Sidebar />
      </div>
      <Content />
    </Box>
  )
}
