import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { RootLayout } from "./RootLayout/RootLayout";
import 'react-toastify/dist/ReactToastify.css';
import Task from "./pages/Task";
import { HelmetProvider } from 'react-helmet-async';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/tasks" element={<Task/>}></Route>
        </Route>
      </Route>
    )
  );
  return (
    <>
      <HelmetProvider>

      <RouterProvider router={router} />
      </HelmetProvider>

    </>
  );
}

export default App;
