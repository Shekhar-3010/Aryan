import React, {useContext} from 'react';

//Import Icons
import {Im500Px, ImTwitter, ImWhatsapp, ImTelegram, ImSkype,ImInstagram, ImFacebook, ImPhone} from 'react-icons/im';

//Import Circle Context
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
  <ul className='flex gap-x-4 '>
      <li className='hover:scale-150'>
        <a href="https://www.instagram.com/__aryan__kapoor__/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank'>
          <ImInstagram />
        </a>
      </li>
      <li className='hover:scale-150'>
        <a href="https://api.whatsapp.com/send?phone=917249992499&text=Hey!%20Saw%20your%20work%20Can%20You%20please%20Provide%20some%20info%20regarding...." target='_blank'>
          <ImWhatsapp />
        </a>
      </li>
      <li className='hover:scale-150'>
        <a href="https://www.facebook.com/people/Mayank-Kapoor/pfbid0ZNqEuQAfAKFpGniZXsKySqAky9sAN4b5yFabCPvviRjbDUszHUPLij672toVk3MEl/" target='_blank'>
          <ImFacebook />
        </a>
      </li>
      <li className='hover:scale-150'>
      <a href="tel:+917249992499" target='_blank'>
          <ImPhone/>
        </a>
      </li>
      <li className='hover:scale-150'>
        <a href="mailto:Mayankkapoormk2000@gmail.com " target='_blank'>
          <ImSkype />
        </a>
      </li>
    </ul>
  </div>;
};

export default Socials;
