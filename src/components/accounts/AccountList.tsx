import { Box } from "@mui/material";
import { useContext } from "react";
import AccountItem from "./AccountItem";
import { AccountContext } from "../../App";

export default function AccountList() {
    const {accounts} = useContext(AccountContext);

    return (
        <Box minWidth={800}>
            {
                accounts.map(account => {
                    return <AccountItem key={account.id} account={account} />
                })
            }
        </Box>
    )
}
