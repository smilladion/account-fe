import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { Account } from "../../types/Account";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AccountItemProps {
    account: Account
}

export default function AccountItem({account}: AccountItemProps) {
    // Could add logic here that, based on the currency given by the account, changes the monetary symbol (e.g. kr/$/€/£...)

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{flexDirection: "row-reverse"}}>
                <Box display="flex" justifyContent="space-between" width="100%">
                    <Typography ml={1}>{account.name}</Typography>
                    <Typography fontWeight="bold">{account.balance.toLocaleString("da-DK")} kr</Typography>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Account Id: {account.id}</Typography>
                <Typography>Account Owner: {account.username}</Typography>
                <Typography>Currency: {account.currency}</Typography>
            </AccordionDetails>
        </Accordion>
    )
}