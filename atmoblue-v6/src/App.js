import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

// Components
import Navbar from './Navbar';
import MyAir from './MyAir';
import MyMask from './MyMask';
import MyCity from './MyCity';
import Data from './Data';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<MyAir />} />
      <Route path="cityview" element={<MyCity />} />
      <Route path="maskview" element={<MyMask />} />
      <Route path="data" element={<Data />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;