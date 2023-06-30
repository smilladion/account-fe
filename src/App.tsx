import { CssBaseline } from '@mui/material';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './components/Root';
import Home from './components/Home';
import AccountList from './components/AccountList';
import TransactionList from './components/TransactionList';
import { Account } from './types/Account';
import { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react';
import AccountService from './services/AccountService';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="accounts" element={<AccountList />} />
        <Route path="transactions" element={<TransactionList />} />
    </Route>
))

type AccountContextType = { accounts: Account[], setAccounts: Dispatch<SetStateAction<Account[]>> };

export const AccountContext = createContext<AccountContextType>({} as AccountContextType);

function App() {
    const [accounts, setAccounts] = useState<Account[]>([]);

    useEffect(() => {
        AccountService.getAllAccounts()
            .then(accounts => setAccounts(accounts))
            .catch(error => console.log(error))
    }, []);

    return (
        <AccountContext.Provider value={{ accounts: accounts, setAccounts: setAccounts }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <CssBaseline />
                <RouterProvider router={router} />
            </LocalizationProvider>
        </AccountContext.Provider>
    );
}

export default App;
