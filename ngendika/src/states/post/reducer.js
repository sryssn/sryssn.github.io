import { ActionType } from './action';

function postReducer(post = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_POST:
      return action.payload.post;
    case ActionType.ADD_POST:
      return action.payload.post;
    default:
      return post;
  }
}

export default postReducer;
