import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomePageFooter from '../components/HomePage/HomePageFooter';
import HomePageHeader from '../components/HomePage/HomePageHeader';
import PostList from '../components/PostList';
import { asyncUnsetAuthUser } from '../states/authUser/action';
import { asyncPopulateUsersAndPost } from '../states/shared/action';

function HomePage() {
  const {
    post = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndPost());
  }, [dispatch]);

  const onLogOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  const postList = post.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <>
      <header>
        <HomePageHeader />
      </header>
      <main>
        <PostList post={postList} authUser={authUser} />
      </main>
      <footer>
        <HomePageFooter logOut={onLogOut} />
      </footer>
    </>
  );
}

export default HomePage;
