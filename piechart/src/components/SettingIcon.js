import React from 'react';
import { useState } from 'react'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material'
import close from '../assets/icons/close.svg';
import setting from '../assets/icons/setting.svg';
import user from '../assets/icons/user.svg';

function SettingIcon() {
    const [open, setOpen] = useState(false)

    const dialogStyle = {
        backgroundColor: 'white',
        padding: '20px',
        width: '50rem',
        height: '20rem'
      }

  


  return (
    <div>
        <button className='mt-[.3rem] w-8' onClick={() => setOpen(true)}>
            <img src={setting} alt='icon' />
        </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'
        PaperProps={{
            style: dialogStyle
          }}
        >
        <button onClick={() => setOpen(false)} className='absolute right-10 top-9'>
            <img src={close} alt='logo' className='w-8 hover:text-[#42a5ef]' style={{ cursor: 'pointer' }} />
          </button>
        <DialogContent>

        <div className='text-2xl'> Coming Soon 😁 </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default SettingIcon;


