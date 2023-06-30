import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../App";
import TransactionService from "../../services/TransactionService";
import { Transaction } from "../../types/Transaction";
import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import TransactionList from "./TransactionList";

export default function TransactionPage() {
    const {accounts} = useContext(AccountContext);

    const [selectedAccount, setSelectedAccount] = useState<string>("");
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

    useEffect(() => {
        if (selectedAccount) {
            const account = accounts.find(a => a.name === selectedAccount);

            if (account) {
                TransactionService.getTransactionsByAccount(account)
                    .then(transactions => setTransactions(transactions))
                    .catch(error => console.log(error));
            }
        }
    }, [selectedAccount, accounts]);

    useEffect(() => {
        if (accounts.length) {
            setSelectedAccount(accounts[0].name);
        }
    }, [accounts]);

    return (
        <Box mx={5} my={5} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Typography color="#013655" fontWeight="bold" fontSize={30} mb={5}>
                Transactions
            </Typography>
            <Box display="flex" alignItems="center" mb={5} sx={{ gap: 4 }}>
                <FormControl sx={{ minWidth: 200 }} size="small">
                    <Select
                        value={selectedAccount}
                        displayEmpty
                        onChange={e => setSelectedAccount(e.target.value)}
                    >
                        {
                            accounts.map(account => {
                                return <MenuItem key={account.id} value={account.name}>{account.name}</MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
                <DatePicker value={selectedDate} onChange={(newDate) => setSelectedDate(newDate)} />
            </Box>
            <TransactionList transactions={transactions} selectedDate={selectedDate} />
        </Box>
    )
}
