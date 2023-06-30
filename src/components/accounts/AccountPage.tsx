import { Box, Fab, Typography } from "@mui/material";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import AccountDialog from "./AccountDialog";
import AccountList from "./AccountList";

export default function AccountPage() {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <Box mx={5} my={5} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Typography color="#013655" fontWeight="bold" fontSize={30} mb={5}>
                Accounts
            </Typography>
            <AccountList />
            <Fab size="medium" sx={{mt: 5, backgroundColor: "#013655", color: "white"}} onClick={e => setDialogOpen(true)}>
                <AddIcon />
            </Fab>
            <AccountDialog open={dialogOpen} setOpen={setDialogOpen} />
        </Box>
    )
}