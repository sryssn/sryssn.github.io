import React, { useState } from 'react';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../utils';

function PostItem({
  title, body, createdAt, totalComments, user, upVotesBy, id,
}) {
  const navigate = useNavigate();
  const [textBody, setTextBody] = useState(true);

  const resultBody = textBody ? body.substring(0, 200) : body;

  const toggleReadMoreLess = () => {
    setTextBody(!textBody);
  };

  const onCommentButton = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="home-page-main-post">
      <div className="home-page-post-wrapper-avatar-header">
        <img src={user.avatar} alt={user} className="home-page-main-avatar" />
        <div className="home-page-post-header-name-date">
          <span className="post-name">{user.name}</span>
          <span className="post-date">{postedAt(createdAt)}</span>
        </div>
      </div>
      <div className="post-body">
        <h2>{title}</h2>
        {
          body.length > 200
            ? (
              <div onClick={toggleReadMoreLess} aria-hidden="true">
                {parser(resultBody)}
                <div>
                  {
                  textBody
                    ? (
                      <>
                        <span>
                          ...
                          {' '}
                        </span>
                        <span className="readMoreLess">
                          See more
                        </span>
                      </>
                    ) : null
                }
                </div>
              </div>
            )
            : parser(body)
        }
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
          totalComments > 0 ? (
            <span className="number-of-comments">
              {totalComments}
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
        <Button className="button-comment-wrapper" variant="light" type="button" onClick={onCommentButton}>
          <FaRegCommentAlt className="button-comment-icon" />
          <span>Comment</span>
        </Button>
      </div>
    </div>
  );
}

const userShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const postItemShape = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
};

PostItem.propTypes = {
  ...postItemShape,
};

export { postItemShape };

export default PostItem;
