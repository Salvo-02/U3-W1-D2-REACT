import "./App.css";
import AllTheBooks from "./components/AllTheBooks";
import MyNav from "./components/MyNav";

function App() {
  return (
    <>
      <MyNav home="Home" about="About" browse="Browse" />
      <AllTheBooks />
    </>
  );
}

export default App;
