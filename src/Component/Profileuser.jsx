import React from 'react'

import pimg from "../Assest/Profile.svg"
import icon1 from "../Assest/share.svg"
import icon2 from "../Assest/threedots.svg"

const Profileuser = () => {
  return (
    <div className='profile__img' id="profile__img">
        <div>
            <div>
                <img src={pimg} />
            </div>
            <p>Annette Black</p>
      </div>
      <div className='icon'>
        <img src={icon1} alt="icon" />
        <img src={icon2} alt='ncjvd' />
      </div>
    </div>
  )
}

export default Profileuser