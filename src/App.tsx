import { useEffect } from 'react';
import './App.css'
import { SubComponent } from './SubComponent'
import { useUser } from './user/useUser';

function App() {
  const {initUserInstance, userName, setUserName } = useUser();

  useEffect(() => {
    initUserInstance();
  }, []);

  return (
    <>
      <input value={userName} onInput={(e) => setUserName(e.currentTarget.value)} />
      <SubComponent />
    </>
  )
}

export default App
