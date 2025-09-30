import "./App.css";
import FirstAlert from "./components/Alert";
import AllTheBooks from "./components/AllTheBooks";
import Footer from "./components/Footer";
import MyNav from "./components/MyNav";

function App() {
  return (
    <>
      <MyNav home="Home" about="About" browse="Browse" />
      <FirstAlert />
      <AllTheBooks />
      <Footer />
    </>
  );
}

export default App;
