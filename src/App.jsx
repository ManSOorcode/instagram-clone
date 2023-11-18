// import "./App.css";

import Navigation from "./components/Navigation";
import Post from "./components/Post";

function App() {
  return (
    <div className="relative">
      {/**Nav */}
      <Navigation />
      {/*post */}
      <div className="mt-20 flex items-center flex-col ">
        <Post />
        <Post />
        <Post />
      </div>
      {/*menu */}
    </div>
  );
}

export default App;
