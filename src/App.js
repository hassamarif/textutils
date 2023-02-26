import Navbar from "./components/Navbar";
import "./App.css";
// import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About us" />
      <div className="container my-3">
        {/* <TextForm heading="Enter the text to analyze below" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
