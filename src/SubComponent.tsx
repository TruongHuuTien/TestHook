import { useUser } from "./user/useUser"

export const SubComponent = () => {
  const { userName, setUserName } = useUser();


  return (
    <div className="panel">
      <h3>SubComponent</h3>
      <input value={userName} onInput={(e) => setUserName(e.currentTarget.value)} />
      <div>Username: {userName}</div>
    </div>
  )
}