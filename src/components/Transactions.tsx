import { Box, Divider, FormControl, List, ListItem, ListItemButton, ListItemText, MenuItem, Select, Typography } from "@mui/material";
import { Account } from "../types/Account";
import { useState } from "react";

const accountsData: Account[] = [
    {
        id: 435680324432,
        name: "Savings",
        username: "John Doe",
        balance: 50361.21,
        currency: "DKK"
    },
    {
        id: 100437206777,
        name: "Bills and expenses",
        username: "John Doe",
        balance: 12053.55,
        currency: "DKK"
    },
    {
        id: 8766084437332,
        name: "Holiday fund",
        username: "John Doe",
        balance: 27600.80,
        currency: "DKK"
    }
]

export default function Transactions() {
    const [selectedAccount, setSelectedAccount] = useState(accountsData[0].name);

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
                        accountsData.map(account => {
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