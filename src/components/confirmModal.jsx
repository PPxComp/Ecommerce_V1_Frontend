import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function ResponsiveDialog({ open, setOpen, id }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Are you sure to delete <br />
          {id}
        </DialogTitle>

        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            NO
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
