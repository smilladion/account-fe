import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import logo from "../assets/danske-bank-logo.png";

export default function Root() {
    return (
        <Box>
            <AppBar position="static" sx={{ backgroundColor: "#003f62" }}>
                <Toolbar>
                    <img src={logo} alt="logo" width={180} />
                    <Box sx={{ display: "flex", flexGrow: 1, ml: 3 }}>
                        <Button
                            sx={{ my: 2, color: 'white', fontWeight: "bold", display: 'block' }}
                        >
                            Home
                        </Button>
                        <Button
                            sx={{ my: 2, color: 'white', fontWeight: "bold", display: 'block' }}
                        >
                            Accounts
                        </Button>
                        <Button
                            sx={{ my: 2, color: 'white', fontWeight: "bold", display: 'block' }}
                        >
                            Transactions
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Outlet />
        </Box>
    )
}