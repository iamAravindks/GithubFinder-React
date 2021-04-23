import React, { useContext, useState } from "react";
import AlertContext from "../../context/Alert/AlertContext";
import { Alert } from "reactstrap";

const Pop = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);
  return (
    <>
      {alert && (
        <Alert
          color={`${alert.type} `}
          className='m-2'
          isOpen={visible}
          toggle={onDismiss}
        >
          {alert.msg}
        </Alert>
      )}
    </>
  );
};

export default Pop;
