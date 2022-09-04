import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './redux/state'

let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
    <BrowserRouter>
      <App state={store.getState()} addPost={store.addPost} updateNewPostText={store.updateNewPostText} subscribe={store.subscribe} />
      </BrowserRouter>
    </React.StrictMode>
  )
}

  rerenderEntireTree(store.getState())

  store.subscribe(rerenderEntireTree)
