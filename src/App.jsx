import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Side from './Components/Side';
import CreatePost from './Components/CreatePost';
import Post from './Components/Post';
import PostList from './Components/PostList';
import PostListProvider from './store/post-list-store';

function App() {
  const[selectedTab,setSelectedTab]=useState("Home")
    return(
    <>
    <PostListProvider>
    <div className="app-container">
     <Side selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
     <div className="content">
  <Header/>
  {selectedTab==="Home"?
(<PostList/>):
( <CreatePost/>)  
}
 
  
  <Footer/>
  </div>
  </div>
  </PostListProvider>
    </>
    )
}

export default App
