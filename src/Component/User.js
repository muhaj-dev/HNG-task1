import React from 'react'

import pimg from "../Assest/Profile.svg"
import Social from './Social'
import Link from './Link'
import Footer from './Footer'

const User = () => {
  return (
    <div className='app__profile'>
      <div className='profile__img'>
        <div>
          <img src={pimg} />
        </div>
        <p>Annette Black</p>
      </div>
      <Link />
      <Social />
      <Footer />
    </div>
  )
}

export default User