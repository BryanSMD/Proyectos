import { useState } from 'react'
import './App.css'

export function TwitterFollowCard({ formatUserName, userName, name, isFollowing: initialIsFollowing }) {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const buttonClassName = isFollowing
    ? 'tw-card-button-is-following'
    : 'tw-card-button-not-following'

  const buttonText = isFollowing ? 'Siguiendo' : 'Seguir'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-card'>
      <header className='tw-card-header'>
        <img 
          className='tw-card-img'
          src={`https://unavatar.io/x/${userName}`} 
          alt="Avatar"
        />
        <div className='tw-card-div-user'>
          <strong className='tw-card-user'>{name}</strong>
          <span className='tw-card-span-user'>{formatUserName(userName)}</span>
        </div>    
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-card-button-img-like'>
            <img
              src='https://img.icons8.com/stickers/100/facebook-like.png'
              alt={isFollowing ? "is_folowing" : "not_following"}
              width="24"
            />
          </span>
          <span className='tw-card-button-img-dislike'>
            <img
              src='https://img.icons8.com/stickers/100/thumbs-down.png'
              alt='stop_following'
              width="24"
            />
          </span>
          <span className='tw-card-button-text'>
             {buttonText}
          </span>
          <span className='tw-card-button-stop-following'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}