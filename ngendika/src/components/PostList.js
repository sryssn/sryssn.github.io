import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostItem, { postItemShape } from './PostItem';

function PostList({ post, authUser }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="home-page-main-input">
        <div className="home-page-main-wrapper-avatar-text-field">
          <img src={authUser.avatar} alt={authUser} className="home-page-main-avatar" />
          <Button className="home-page-main-text-field" onClick={() => navigate('/add-new-post')} variant="light" type="button">What do you want to share?</Button>
        </div>
      </div>
      {
        post.map((thread) => (
          <PostItem key={thread.id} {...thread} />
        ))
      }
    </>
  );
}

const userShape = {
  avatar: PropTypes.string.isRequired,
};

PostList.propTypes = {
  post: PropTypes.arrayOf(PropTypes.shape(postItemShape)).isRequired,
  authUser: PropTypes.shape(userShape).isRequired,
};

export default PostList;
