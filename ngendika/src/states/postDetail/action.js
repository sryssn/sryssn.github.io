import api from '../../utils/api';

const ActionType = {
  RECEIVE_POST_DETAIL: 'RECEIVE_POST_DETAIL',
  CLEAR_POST_DETAIL: 'CLEAR_POST_DETAIL',
};

function receivePostDetailActionCreator(postDetail) {
  return {
    type: ActionType.RECEIVE_POST_DETAIL,
    payload: {
      postDetail,
    },
  };
}

function clearPostDetailActionCreator() {
  return {
    type: ActionType.CLEAR_POST_DETAIL,
  };
}

function asyncReceivePostDetail(postId) {
  return async (dispatch) => {
    dispatch(clearPostDetailActionCreator());
    try {
      const postDetail = await api.getPostDetail(postId);
      dispatch(receivePostDetailActionCreator(postDetail));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receivePostDetailActionCreator,
  clearPostDetailActionCreator,
  asyncReceivePostDetail,
};
