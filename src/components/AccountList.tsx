import { Box, Fab, Typography } from "@mui/material";
import { Account } from "../types/Account";
import { useEffect, useState } from "react";
import AccountView from "./AccountView";
import AddIcon from '@mui/icons-material/Add';
import AccountDialog from "./AccountDialog";
import AccountService from "../services/AccountService";

export default function AccountList() {
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [dialogOpen, setDialogOpen] = useState(false);

    useEffect(() => {
        AccountService.getAllAccounts()
            .then(accounts => setAccounts(accounts))
            .catch(error => console.log(error))
    }, []);

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
            <AccountDialog open={dialogOpen} setOpen={setDialogOpen} setAccounts={setAccounts} />
        </Box>
    )
}