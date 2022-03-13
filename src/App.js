import "./App.css";
import User from "./component/User";

const userIds = [1, 3, 5, 7, 123];
function App() {
  return (
    <div className="App">
      App Component
      <User count={12} age="OLD"/>
    </div>
  );
}
export default App;
