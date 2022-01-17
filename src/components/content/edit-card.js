import { useSetState } from 'react-use'

import { TextField, Box, Button, Modal } from '@mui/material'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const EditCard = ({ handleClose, handleSubmit, isFormOpen, card }) => {

  const [{
    _id = card._id,
    name = card.name || '',
    role = card.role || '',
    fb = card.fb,
    insta = card.insta || '',
    linkedin = card.linkedin || '',
    twitter = card.twitter || ''
  }, setState] = useSetState({})

  const formSubmit = (e) => {
    e.preventDefault()
    handleSubmit({
      _id,
      name,
      role,
      fb,
      insta,
      linkedin,
      twitter
    })
  }

  return (
    <div>
      <Modal
        open={isFormOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formSubmit}>
            <TextField
              sx={{ mb: 2, width: '20em' }}
              value={name}
              label='Full Name'
              placeholder='Start Typing'
              onChange={e => setState({ name: e.target.value })}
            />
            <TextField
              sx={{ mb: 2, width: '20em' }}
              value={role}
              label='Role'
              placeholder='Start Typing'
              onChange={e => setState({ role: e.target.value })}
            />
            <TextField
              sx={{mb: 2, width: '20em'}}
              value={fb}
              label='Facebook Handle'
              placeholder='Start Typing'
              onChange={e => setState({ fb: e.target.value })}
            />
            <TextField
              sx={{mb: 2, width: '20em'}}
              value={insta}
              label='Instagram Handle'
              placeholder='Start Typing'
              onChange={e => setState({ insta: e.target.value })}
            />
            <TextField
              sx={{mb: 2, width: '20em'}}
              value={linkedin}
              label='Linkedin Handle'
              placeholder='Start Typing'
              onChange={e => setState({ linkedin: e.target.value })}
            />
            <TextField
              sx={{ mb: 2, width: '20em' }}
              value={twitter}
              label='Twitter Handle'
              placeholder='Start Typing'
              onChange={e => setState({ twitter: e.target.value })}
            />
            <Button type='submit' sx={{
              position: 'absolute',
              top: '50%',
              left: '80%',
              transform: 'translateY(-50%)'
            }}>
              UPDATE
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
