import { useEffect } from 'react';
import './App.css'
import { SubComponent } from './SubComponent'
import { userModel } from './user/userModel';
import { useUser, useUser2 } from './user/useUser';

function App() {
  const { userName, setUserName } = useUser();
  const { initUserInstance, userName: userName2, setUserName: setUserName2 } = useUser2();

  useEffect(() => {
    initUserInstance();
  }, [initUserInstance]);

  return (
    <>
      <div>hello: {userName2}</div>
      <input value={userName} onInput={(e) => userModel.setName(e.currentTarget.value)} placeholder='Using model directly' />
      <input value={userName} onInput={(e) => setUserName(e.currentTarget.value)} placeholder='User hook' />
      <input value={userName} onInput={(e) => setUserName2(e.currentTarget.value)} placeholder='User hook 2' />
      <SubComponent />
    </>
  )
}

export default App
