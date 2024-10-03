import { useDispatch } from "react-redux";
import EditProfile from "./Profile/EditProfile";

function App() {
  const dispatch = useDispatch();
  const onButtonClick = () => {
    dispatch({
      type: "UPDATE_USER",
      payload: { username: "YAGNIK AKBARI", status: "OPENED" },
    });
  };
  return (
    <div className="App">
      <EditProfile />
      <button onClick={onButtonClick}>Click and refresh</button>
    </div>
  );
}

export default App;
