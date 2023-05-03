import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

import styles from './Post.scss';

import { Subtitle, Rate } from './styles';

export default function Post(props) {
  // if (props.post.read){
  //   return <h2>{props.post.title} já foi lido</h2>
  // }

  return (
    <article
      className={props.post.removed ? styles.deleted : styles.post}
    >
      <PostHeader
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read,
        }}
      />
      
      <Subtitle>{props.post.subtitle}</Subtitle>
      <Rate>Média: {props.post.likes / 2}</Rate>
    </article>
  );
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired,
};