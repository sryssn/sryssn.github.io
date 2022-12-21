import React, { useState } from 'react';
import { MdSend } from 'react-icons/md';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function DetailPageFooter({ authUser, onAddComment }) {
  const [content, setContent] = useState('');

  const addComment = () => {
    onAddComment(content);
    setContent('');
  };

  function onContentChange(event) {
    setContent(event.target.innerHTML);
  }

  return (
    <div className="footer-input-comment">
      <div className="footer-input-comment-wrapper">
        <div className="detail-page-footer-wrapper-avatar-comment">
          <img src={authUser.avatar} alt={authUser} className="avatar-comment" />
          <div className="detail-page-footer-text-field" data-placeholder="Write a comment..." onInput={onContentChange} contentEditable />
          {
            content ? (
              <Button variant="light" className="button-send-icon" type="button" aria-label="Send Button" onClick={addComment}>
                <MdSend className="detail-page-send-icon" />
              </Button>
            ) : (null)
          }
        </div>
      </div>
    </div>
  );
}

const authUserShape = {
  avatar: PropTypes.string.isRequired,
};

DetailPageFooter.propTypes = {
  onAddComment: PropTypes.func.isRequired,
  authUser: PropTypes.shape(authUserShape).isRequired,
};

export default DetailPageFooter;
