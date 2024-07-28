import logo from './logo.svg';
import  'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { SideBar } from './Components/SideBar';
import { useState } from 'react';
import { CreatePost } from './Components/CreatePost';
import { Post } from './Components/Post';
import { PostList } from './Components/PostList';
import PostListProvider from './Store/post-list-store';


function App() {

  const [selectedTab, setselectedTab] = useState("Home")
  
  return (
    <PostListProvider>
   <div className="app-container">
    <SideBar selectedTab={selectedTab} setSelectedTab={setselectedTab}/>
    <div className='content'>
    <Header/>
    {selectedTab==='Home'?<PostList/>:<CreatePost/>}
    <Footer/>
    </div>
    </div>
    </PostListProvider>
  );
}

export default App;
