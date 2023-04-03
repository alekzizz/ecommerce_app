import Home from "./routes/home/home.component";
import { Routes, Route, Outlet } from "react-router-dom";

const Navigation = () => (
  <div>
    <h1>I am navigation bar</h1>
    <Outlet />
  </div>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
