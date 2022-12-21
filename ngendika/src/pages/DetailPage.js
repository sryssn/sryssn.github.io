import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DetailPageFooter from '../components/DetailPage/DetailPageFooter';
import PostComment from '../components/PostComment';
import DetailPageHeader from '../components/DetailPage/DetailPageHeader';
import PostDetail from '../components/PostDetail';
import { asyncReceivePostDetail } from '../states/postDetail/action';
import { asyncAddComment } from '../states/post/action';

function DetailPage() {
  const { id } = useParams();
  const {
    postDetail = null,
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceivePostDetail(id));
  }, [id, dispatch]);

  const onAddComment = (content) => {
    dispatch(asyncAddComment({ content, id }));
  };

  if (!postDetail) {
    return null;
  }

  return (
    <>
      <DetailPageHeader {...postDetail} />
      <div className="detail-page-wrapper">
        <PostDetail {...postDetail} />
        {
          (postDetail.comments).map((comment) => (
            <PostComment key={comment.id} {...comment} />
          )).reverse()
        }
      </div>
      <DetailPageFooter authUser={authUser} onAddComment={onAddComment} />
    </>
  );
}

export default DetailPage;
