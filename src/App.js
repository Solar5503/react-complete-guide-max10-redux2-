import { useSelector } from 'react-redux/es/exports';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

function App() {
  const isLogin = useSelector((state) => state.auth.isAuth);
  return (
    <>
      <Header />
      {!isLogin && <Auth />}
      {isLogin && <UserProfile />}
      {isLogin && <Counter />}
    </>
  );
}

export default App;
