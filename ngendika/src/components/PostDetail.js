import React from 'react';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';

function PostDetail({
  title, body, comments, upVotesBy,
}) {
  return (
    <>
      <div className="detail-post-body">
        <h2>{title}</h2>
        {parser(body)}
      </div>
      <div className="like-comment-wrapper">
        <div className="number-of-likes-wrapper">
          {
            upVotesBy.length > 0
              ? (
                <>
                  <AiFillLike className="likeButton" />
                  <span className="number-of-likes">{upVotesBy.length}</span>
                </>
              ) : null
          }
        </div>
        {
          comments.length > 0 ? (
            <span className="number-of-comments">
              {comments.length}
              {' '}
              comment
            </span>
          ) : (null)
        }
      </div>
      <div className="button-like-comment-wrapper">
        <Button className="button-like-wrapper" variant="light" type="button">
          <AiOutlineLike className="button-like-icon" />
          <span>Like</span>
        </Button>
        <Button className="button-comment-wrapper" variant="light" type="button">
          <FaRegCommentAlt className="button-comment-icon" />
          <span>Comment</span>
        </Button>
      </div>
    </>
  );
}

const postDetailShape = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  upVotesBy: PropTypes.array.isRequired,
};

PostDetail.propTypes = {
  ...postDetailShape,
};

export default PostDetail;
