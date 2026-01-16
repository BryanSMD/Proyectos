// Practica con js vainilla
// const buttons = document.querySelectorAll('button');

// buttons.forEach(button => {

//     button.addEventListener('click', function() {

//         const id = button.getAttribute('data-id');

//         if(button.classList.contains('liked')) {
//             button.classList.remove('liked');
//             button.innerText = 'Me gusta';
//         } else {
//             button.classList.add('liked');
//             button.innerText = 'No me gusta';
//         }
        
//         //alert('Button clicked!');

//     })
// });

import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

// Practica con React

const appDomElement = document.getElementById('app');

const root = ReactDOM.createRoot(appDomElement);

const button1 = React.createElement('button', { "data-id": 123 }, 'Me gusta');
const button2 = React.createElement('button', { "data-id": 456 }, 'Me gusta');
const button3 = React.createElement('button', { "data-id": 789 }, 'Me gusta');

const app = React.createElement(React.Fragment, {}, [button1, button2, button3]);

root.render(app);