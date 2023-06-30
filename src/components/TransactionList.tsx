import { Box, Divider, FormControl, List, MenuItem, Select, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../App";
import TransactionService from "../services/TransactionService";
import { Transaction } from "../types/Transaction";
import TransactionView from "./TransactionView";

export default function TransactionList() {
    const {accounts} = useContext(AccountContext);

    const [selectedAccount, setSelectedAccount] = useState<string>("");
    const [transactions, setTransactions] = useState<Transaction[]>([]);

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
            <FormControl sx={{ mb: 5, minWidth: 200 }} size="small">
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
            <List sx={{ minWidth: 800, border: 1, borderRadius: 2, borderColor: "#dddddd" }}>
                {
                    transactions.length
                        ? transactions.map((transaction, i) => (
                            <>
                                <TransactionView transaction={transaction} />
                                {
                                    i !== transactions.length - 1 && <Divider />
                                }
                            </>
                        ))
                        : <Typography color="grey" sx={{ pl: 2 }}>This account has no transactions.</Typography>
                }
            </List>
        </Box>
    )
}