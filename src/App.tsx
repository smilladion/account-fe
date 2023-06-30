import { CssBaseline } from '@mui/material';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './components/Root';
import HomePage from './components/HomePage';
import { Account } from './types/Account';
import { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react';
import AccountService from './services/AccountService';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TransactionPage from './components/transactions/TransactionPage';
import AccountPage from './components/accounts/AccountPage';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="accounts" element={<AccountPage />} />
        <Route path="transactions" element={<TransactionPage />} />
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
