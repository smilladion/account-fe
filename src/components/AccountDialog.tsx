import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

interface AccountDialogProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default function AccountDialog({open, setOpen}: AccountDialogProps) {
    const [newAccountName, setNewAccountName] = useState("");

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
                <Button onClick={() => setOpen(false)}>Confirm</Button>
            </DialogActions>
        </Dialog>
    )
}
