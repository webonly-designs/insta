import React from 'react'
import { SocialIcon } from 'react-social-icons';

function social() {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
        <div className="flex items-center space-x-5">
            <SocialIcon url="https://www.instagram.com/designs.webonly/" className="hover:scale-110"/>
            <SocialIcon url="https://www.facebook.com/WebOnlyCanada" className="hover:scale-110"/>
            <SocialIcon url="https://www.youtube.com/channel/UCZQ5lfHxbiu81oziZpJ5p7g" className="hover:scale-110"/>
            <SocialIcon url="https://github.com/webonly-designs" className="hover:scale-110" fgColor='white'/>
        </div>
    </div>
  )
}

export default social