import React, { useState } from 'react';
import user from '../assets/icons/user.svg';
import setting from '../assets/icons/setting.svg';
import logo from '../assets/icons/analytics.svg';
import DialogBox from './DialogBox';
import UserLogo from './UserLogo';
import SettingIcon from './SettingIcon';



function Header() {


  const handleRefreshClick = () => {
    window.location.reload();
  };
  return (
    <>
      <div className='bg-[#f3f4f9] text-black px-4 py-6 flex justify-between items-center self-baseline border-b-2'>
        <div className='flex gap-1'>
          <button onClick={handleRefreshClick}>
            <img src={logo} alt='logo' className='w-10 hover:text-[#42a5ef]' style={{ cursor: 'pointer' }} />
          </button>
          <button className='px-3 rounded-lg py-1 text-2xl hover:text-[#42a5ef]' onClick={handleRefreshClick}>
            Analytics
          </button>
        </div>
        <div className='flex gap-5'>
          
            {<DialogBox/>}
          
           {<UserLogo/>}
          {<SettingIcon/>}
          {/* <img src={setting} className='w-8 ' alt='setting icon' style={{ cursor: 'pointer' }} /> */}
        </div>
      </div>
    </>
  );
}

export default Header;
