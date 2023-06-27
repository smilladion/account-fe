import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { Account } from "../types/Account";

interface AccountProps {
    account: Account
}

export default function AccountView({account}: AccountProps) {
    return (
        <Accordion>
            <AccordionSummary>
                <Typography>{account.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Account Id: {account.id}</Typography>
                <Typography>Account Owner: {account.user}</Typography>
                <Typography>Currency: {account.currency}</Typography>
            </AccordionDetails>
        </Accordion>
    )
}