import React, { useState } from 'react';

import Post from './Post';
import Header from './Header';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Title#01', subtitle: 'Sub#01', likes: 20, read: false, },
    { id: 2, title: 'Title#02', subtitle: 'Sub#02', likes: 10, read: true, },
    { id: 3, title: 'Title#03', subtitle: 'Sub#03', likes: 50, read: false, },
    { id: 4, title: 'Title#04', subtitle: 'Sub#03', likes: 50, read: true, },
  ]);

  console.log({ posts });

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Sub#0${prevState.length + 1}`,
        likes: 50,
      }
    ]);
  }

  function handleRemovePost(postId){
    setPosts((prevState) => (
      prevState.filter(post => post.id !== postId)
    ));
  }

  return (
    <>
      <Header title="JStack's Blog">
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </>
  )
}

export default App;