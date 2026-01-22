import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'))

const LikeButton = ({text}) => {
  return (
    <button className="like-button">
      <img
        src="https://img.icons8.com/stickers/100/facebook-like.png"
        alt="facebook-like"
        width="24"
      />     
      {text}
    </button>
  )
}

root.render(
  <React.Fragment>
    <LikeButton text= 'Like'/>
    <LikeButton text= 'Me gusta'/>
    <LikeButton text= 'Gema'/>
  </React.Fragment>
);