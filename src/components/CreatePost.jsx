import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import MyModal from './MyModal/MyModal';


const CreatePost = (props) => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [link, setLink] = useState('')

    
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
          id: Date.now(),
          title,
          body,
          link,
        }

        props.addNewPost(newPost)

        // props.setPosts([...props.posts, newPost])
    }

    return(
    <div>
        <form>
            <MyInput
                value={title}
                onChange={e => setTitle(e.target.value)}
                type='text'
                placeholder='Название поста' />
            <MyInput
                value={body}
                onChange={e => setBody(e.target.value)}
                type='text'
                placeholder='Описание поста' />
            <MyInput
                value={link}
                onChange={e => setLink(e.target.value)}
                type='text'
                placeholder='Ссылка' />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    </div>
    )
    };

export default CreatePost;