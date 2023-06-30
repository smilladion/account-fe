import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import AccountService from "../../services/AccountService";
import { AccountContext } from "../../App";

interface AccountDialogProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default function AccountDialog({open, setOpen}: AccountDialogProps) {
    const {setAccounts} = useContext(AccountContext);
    const [newAccountName, setNewAccountName] = useState("");

    function handleCreate() {
        AccountService.createAccount({name: newAccountName, username: "John Doe", balance: 0, currency: "DKK"})
            .then(newAccount => {
                setOpen(false);
                setAccounts(prev => [...prev, newAccount]);
            })
            .catch(error => console.log(error));
    }

    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Create Account</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    The account will be added to the list.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Account Name"
                    fullWidth
                    variant="standard"
                    value={newAccountName}
                    onChange={e => setNewAccountName(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={handleCreate}>Confirm</Button>
            </DialogActions>
        </Dialog>
    )
}
