import React from 'react';
import { Button } from 'react-bootstrap';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function PostComment({
  content, createdAt, owner, upVotesBy,
}) {
  return (
    <>
      <div className="wrapper-avatar-comment">
        <img src={owner.avatar} alt={owner} className="avatar-comment" />
        <div className="text-comment-wrapper">
          <span className="post-name">{owner.name}</span>
          <span>{parser(content)}</span>
        </div>
      </div>
      <div className="footer-comment">
        <div className="wrapper-button-like-date-on-comment">
          <Button className="button-like-on-comment" variant="light" type="button" aria-label="Like Button">
            <AiOutlineLike className="like-icon-on-comment" />
          </Button>
          <span className="post-date-on-comment">{postedAt(createdAt)}</span>
        </div>
        <div className="number-of-likes-on-comment-wrapper">
          {
            upVotesBy.length > 0
              ? (
                <>
                  <span className="number-of-likes-on-comment">{upVotesBy.length}</span>
                  <AiFillLike className="likeButton" />
                </>
              ) : null
          }
        </div>
      </div>
    </>
  );
}

const ownerShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const commentsShape = {
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.array.isRequired,
};

PostComment.propTypes = {
  ...commentsShape,
};

export default PostComment;
