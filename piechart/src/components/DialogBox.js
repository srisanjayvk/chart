import React from 'react';
import { useState } from 'react'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material'
import Table from './Table'
import close from '../assets/icons/close.svg';

function DialogBox() {
    const [open, setOpen] = useState(false)

    const dialogStyle = {
        backgroundColor: 'white',
        padding: '20px',
        width: '50rem',
        height: '20rem'
      }

    const buttonStyle = {
        color: 'black',
        fontSize: '1.2rem',
        '&:hover': {
          color: '#42a5ef' ,
      }
    }


  return (
    <div>
      <Button sx={buttonStyle} onClick={() => setOpen(true)}>Table</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'
        PaperProps={{
            style: dialogStyle
          }}
        >
        <DialogTitle id='dialog-title'>Tables</DialogTitle>
        <button onClick={() => setOpen(false)} className='absolute right-10 top-9'>
            <img src={close} alt='logo' className='w-8 hover:text-[#42a5ef]' style={{ cursor: 'pointer' }} />
          </button>
        <DialogContent>

        {<Table/>}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default DialogBox;


