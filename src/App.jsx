import './App.css'
import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { StoreProvider } from 'easy-peasy';

import store from ".//Store"
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

// import router from "./router"

const router = createBrowserRouter([
  {
      path: "/",
      element: <HomePage />,
  },
  {
      path: "/about",
      element: <AboutPage />
  },
]);

function App() {

  return (
    <>
      <StoreProvider store={store}>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </StoreProvider>
    </>
  )
}

export default App
