import React from 'react';

import Post from './Post';
import Header from './Header';

const posts = [
  { id: 1, title: 'Title#01', subtitle: 'Sub#01', likes: 20, },
  { id: 2, title: 'Title#02', subtitle: 'Sub#02', likes: 10, },
  { id: 3, title: 'Title#03', subtitle: 'Sub#03', likes: 50, },
  { id: 4, title: 'Title#04', subtitle: 'Sub#03', likes: 50, },
]

function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}
    </>
  )
}

export default App;