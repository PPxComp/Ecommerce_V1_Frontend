import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
 
export default function ResponsiveDialog({ open, setOpen, id}) {
  const handleClose = () => {
    setOpen(false);
  };
  async function handleDelete() {
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/stock?data=${id}`
    );
    console.log(res);
    handleClose();
  }

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
          <Button onClick={handleDelete} color="primary" variant="contained">
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
