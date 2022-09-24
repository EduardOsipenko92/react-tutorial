import React, { useMemo, useRef, useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import './styles/App.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';
import PostFilter from './components/PostFilter';
import MyModal from './components/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  
  const addNewPost = (post) => {
    setPosts([...posts, post]);
    setModal(false);
  }
  const sortedAndSearchedPosts = usePosts (posts, filter.sort, filter.query);
  
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick = {() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible = {modal} setVisible={setModal}>
      <CreatePost
        // posts={posts}
        // setPosts={setPosts}
        // setModal={false}
        addNewPost={addNewPost}
      />
      </MyModal>

      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList 
        remove = {removePost}
        posts={sortedAndSearchedPosts}
        title='Посты про JS'/> 
    </div>
  );
}

export default App;