import './App.css'
import { SubComponent } from './SubComponent'
import { userModel } from './user/userModel';
import { useUser } from './user/useUser';

function App() {
    const { userName, setUserName } = useUser();
  
  return (
    <>
      <input value={userName} onInput={(e) => userModel.setName(e.currentTarget.value)} placeholder='Using model directly' />
      <input value={userName} onInput={(e) => setUserName(e.currentTarget.value)} placeholder='User hook' />
      <SubComponent />
    </>
  )
}

export default App
