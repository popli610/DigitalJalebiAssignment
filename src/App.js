import { Toaster } from "react-hot-toast";
import UserDisplay from "./components/UserDisplay";

function App() {
  return (
    <div className="App">
      <Toaster position="top-center"/>
      <UserDisplay/>
    </div>
  );
}

export default App;
