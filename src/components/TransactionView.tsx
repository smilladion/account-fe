import { ListItem, ListItemText, Typography } from "@mui/material"
import { Transaction } from "../types/Transaction"
import dayjs from "dayjs";

interface TransactionViewProps {
    transaction: Transaction
}

export default function TransactionView({transaction}: TransactionViewProps) {
    const date = dayjs(transaction.timestamp);

    return (
        <>
            <ListItem sx={{ px: 2, py: 0.5, display: "flex", justifyContent: "space-between" }}>
                <ListItemText primary={date.format("D MMMM YYYY | HH:mm")} secondary={"Id: " + transaction.id} />
                <Typography fontWeight="bold" color={transaction.amount >= 0 ? "green" : "red"}>{transaction.amount}</Typography>
            </ListItem>
        </>
    )
}