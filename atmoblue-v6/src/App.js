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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<MyAir />} />
      <Route path="cityview" element={<MyCity />} />
      <Route path="maskview" element={<MyMask />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;