import * as t from "../types/tweet";
import { loadState } from "../localStorage";

const persistedState = loadState();

const initialState = {
  theme: persistedState?.tweet?.theme || "light",
  profilePhoto: {
    frame: persistedState?.tweet?.profilePhoto?.frame || "circle",
    photo: persistedState?.tweet?.profilePhoto?.photo || null,
  },
  isVerifiedAccount: persistedState?.tweet?.isVerifiedAccount || false,
  name: persistedState?.tweet?.name || null,
  username: persistedState?.tweet?.username || null,
  content: {
    text: persistedState?.tweet?.content?.text || null,
    image: null,
  },
};

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.UPDATE_TWEET:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default tweetReducer;
