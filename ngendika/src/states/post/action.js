import api from '../../utils/api';

const ActionType = {
  RECEIVE_POST: 'RECEIVE_POST',
  ADD_POST: 'ADD_POST',
};

function receivePostActionCreator(post) {
  return {
    type: ActionType.RECEIVE_POST,
    payload: {
      post,
    },
  };
}

function addPostActionCreator(post) {
  return {
    type: ActionType.ADD_POST,
    payload: {
      post,
    },
  };
}

function asyncAddPost({ title, body }) {
  return async (dispatch) => {
    try {
      const post = await api.createPost({ title, body });
      dispatch(addPostActionCreator(post));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncAddComment({ content, id }) {
  return async (dispatch) => {
    try {
      const comment = await api.createComment({ content, id });
      dispatch(addPostActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receivePostActionCreator,
  addPostActionCreator,
  asyncAddPost,
  asyncAddComment,
};
