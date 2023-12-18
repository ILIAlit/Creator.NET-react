import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";

const AlertMassage = (props) => {

  const [alertOpening, setAlertOpening] = useState(false);

  return (
    <Snackbar
      open = {alertOpening}
      autoHideDuration={props.duration}
      onClose = {() => setAlertOpening(!alertOpening)}>
      <Alert onClose = {() => setAlertOpening(!alertOpening)} severity = {props.type}>props.text</Alert>
    </Snackbar>
  );
}

export default AlertMassage;