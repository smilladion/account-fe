import { Box, Fab, Typography } from "@mui/material";
import { Account } from "../types/Account";
import { useState } from "react";
import AccountView from "./AccountView";
import AddIcon from '@mui/icons-material/Add';
import AccountDialog from "./AccountDialog";

const accountsData: Account[] = [
    {
        id: 435680324432,
        name: "Savings",
        user: "John Doe",
        balance: 50361.21,
        currency: "DKK"
    },
    {
        id: 100437206777,
        name: "Bills and expenses",
        user: "John Doe",
        balance: 12053.55,
        currency: "DKK"
    },
    {
        id: 8766084437332,
        name: "Holiday fund",
        user: "John Doe",
        balance: 27600.80,
        currency: "DKK"
    }
]

export default function AccountList() {
    const [accounts, setAccounts] = useState<Account[]>(accountsData);
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <Box mx={5} my={5} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Typography color="#003f62" fontWeight="bold" fontSize={30} mb={5}>
                Accounts
            </Typography>
            <Box minWidth={800}>
                {
                    accounts.map(account => {
                        return <AccountView key={account.id} account={account} />
                    })
                }
            </Box>
            <Fab color="primary" size="medium" sx={{mt: 5}} onClick={e => setDialogOpen(true)}>
                <AddIcon />
            </Fab>
            <AccountDialog open={dialogOpen} setOpen={setDialogOpen} />
        </Box>
    )
}