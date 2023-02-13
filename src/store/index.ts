import { legacy_createStore as createStore } from 'redux';

import reducer from './reducer';

// ==============================|| REDUX - MAIN STORE ||============================== //

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const store = createStore(reducer);
const persister = 'Free';


export { persister,store };
// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
