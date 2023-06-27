import { Box, Typography } from "@mui/material";

export default function Home() {
    return (
        <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" mt={15}>
            <Typography color="#003f62" fontWeight="bold" fontSize={30} mb={2}>
                Welcome to the Account Management system
            </Typography>
            <Typography width={800} fontSize={18} textAlign="center">
                This website has been created as a practice project based on the code test given by Danske Bank.
                It is intended as an account management system where a user can see all their accounts and transactions.
                Select either "Accounts" or "Transactions" in the navigation menu to see it in action.
            </Typography>
        </Box>
    )
}
