import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./Component/RootLayOut/RootLayout";
import Home from "./Pages/Home";
import Bio from "./pages/Bio";
import Music from "./pages/Music";
import Photos from "./pages/Photos";
import Videos from "./pages/Videos";
import Shop from "./pages/Shop";
import Contacts from "./pages/Contacts";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/bio" element={<Bio />}></Route>
        <Route path="/music" element={<Music />}></Route>
        <Route path="/photos" element={<Photos />}></Route>
        <Route path="/videos" element={<Videos />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
