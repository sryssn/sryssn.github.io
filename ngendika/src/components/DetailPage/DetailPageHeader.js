import React from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { postedAt } from '../../utils';

function DetailPageHeader({ owner, createdAt }) {
  const navigate = useNavigate();

  return (
    <div className="detail-page-header-wrapper">
      <div className="detail-page-app-bar-wrapper">
        <div className="detail-page-header">
          <Button className="back-button-wrapper" variant="light" onClick={() => navigate('/')} type="button" aria-label="Back Button">
            <MdOutlineArrowBackIosNew className="back-button" />
          </Button>
          <div className="detail-page-post-wrapper-avatar-header">
            <img src={owner.avatar} alt={owner} className="detail-page-main-avatar" />
            <div className="detail-page-post-header-name-date">
              <span className="post-name">{owner.name}</span>
              <span className="post-date">{postedAt(createdAt)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ownerShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const postDetailShape = {
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

DetailPageHeader.propTypes = {
  ...postDetailShape,
};

export default DetailPageHeader;
