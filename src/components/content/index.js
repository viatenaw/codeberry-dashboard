import { useState, useEffect } from 'react';
import { Typography } from '@mui/material'
import { UserCard } from './user-card'
import { EditCard } from './edit-card'
import axios from 'axios'

export const Content = (props) => {
  const [cards, setCards] = useState([])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editableCard, setEditableCards] = useState({})
  const [isCardUpdated, setIsCardUpdated] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { innerWidth: width } = window;
  const handleOpen = () => {
    setIsFormOpen(true)
  }
  const handleClose = () => {
    setIsFormOpen(false)
    setEditableCards({})
  }
  useEffect(()=> {
    fetchCards()
  }, [isCardUpdated])

  const fetchCards = async () => {
    const resp = await fetch('http://localhost:8000/cards')
    const { users } = await resp.json()
    setCards(users)
  }

  const editCard = card => {
    setEditableCards(card)
    handleOpen()
  }

  const handleSubmit = async (values) => {
    if(isSubmitting) return
    setIsSubmitting(true)
    try{
      const resp = await axios({
        method: 'post',
        url: 'http://localhost:8000/update-cards',
        data: values,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, 
      })
      if(resp?.data?.success) {
        setIsCardUpdated(!isCardUpdated)
      }
      setIsSubmitting(false)
      handleClose()
    } catch(e) {
      console.error('something went wrong', e)
      setIsSubmitting(false)
      handleClose()
    }
  }
  return (
    <div style={{
      position: 'absolute',
      left: '280px',
      top: '5em',
      paddingLeft: '2em',
      maxWidth: width - 280
    }}>
      <div style={{ textAlign: 'start' }}>
        <Typography component="div" sx={{ fontSize: '24px', color: '#212B36' }}>
          User Cards
        </Typography>
        <Typography variant="body2" sx={{ color: '#212B36' }} component="div">
          Dashboard
        </Typography>
      </div>
      <div style={{ marginTop: 5, marginBottom: '2em', display: 'flex', gap: '2em', flexWrap: 'wrap', flexShrink: 0 }}>
        {
          cards?.length > 0 && cards?.map((card, idx) => <UserCard editCard={editCard} key={idx} card={card} /> )
        }
      </div>
      <EditCard handleOpen={handleOpen} handleSubmit={handleSubmit} handleClose={handleClose} isFormOpen={isFormOpen} card={editableCard} />
    </div>
  )
}
