import { CssBaseline, Typography } from '@mui/material';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './components/Root';
import Home from './components/Home';
import Accounts from './components/Accounts';
import Transactions from './components/Transactions';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="transactions" element={<Transactions />} />
    </Route>
))

function App() {
  return (
    <>
        <CssBaseline />
        <RouterProvider router={router} />
    </>
  );
}

export default App;
