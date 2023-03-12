import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.scss";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Users from "@/components/users/Users";
import UserDetail from "./components/users/UserDetail";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="users" element={<Users />} />
        <Route path="users/:userId" element={<UserDetail />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
