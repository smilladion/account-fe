import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/danske-bank-logo.png";

export default function Header() {
    return (
        <AppBar position="static" sx={{ backgroundColor: "#013655" }}>
            <Toolbar>
                <Link to="https://danskebank.dk/">
                    <img src={logo} alt="logo" width={180} />
                </Link>
                <Box sx={{ display: "flex", flexGrow: 1, ml: 3 }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Home
                        </Button>
                    </Link>
                    <Link to="/accounts" style={{ textDecoration: 'none' }}>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Accounts
                        </Button>
                    </Link>
                    <Link to="/transactions" style={{ textDecoration: 'none' }}>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Transactions
                        </Button>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    )
}