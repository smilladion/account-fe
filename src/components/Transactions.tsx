import { Box, Divider, FormControl, List, ListItem, ListItemButton, ListItemText, MenuItem, Select, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../App";

export default function Transactions() {
    const {accounts} = useContext(AccountContext);

    const [selectedAccount, setSelectedAccount] = useState("");

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
                            return <MenuItem value={account.name}>{account.name}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
            <List sx={{ minWidth: 800, border: 1, borderRadius: 2, borderColor: "#dddddd" }}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Inbox" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Drafts" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}