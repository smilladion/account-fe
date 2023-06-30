import { Divider, List, Typography } from "@mui/material";
import { Transaction } from "../../types/Transaction";
import TransactionItem from "./TransactionItem";
import dayjs, { Dayjs } from "dayjs";

interface TransactionListProps {
    transactions: Transaction[],
    selectedDate: Dayjs | null
}

export default function TransactionList({transactions, selectedDate}: TransactionListProps) {
    const filteredTransactions = selectedDate
        ? transactions.filter(t => dayjs(t.timestamp).isSame(selectedDate, "day"))
        : transactions;

    return (
        <List sx={{ minWidth: 800, border: 1, borderRadius: 2, borderColor: "#dddddd" }}>
            {
                filteredTransactions.length
                    ? filteredTransactions.map((transaction, i) => (
                        <>
                            <TransactionItem transaction={transaction} />
                            {
                                i !== filteredTransactions.length - 1 && <Divider />
                            }
                        </>
                    ))
                    : <Typography color="grey" sx={{ pl: 2 }}>This account has no transactions.</Typography>
            }
        </List>
    )
}
