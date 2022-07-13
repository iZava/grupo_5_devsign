import React from "react";
import './InfoTab.css';

const InfoTab = () => {

  React.useEffect(() => {
    const getTransactionData = async () => {
      const transactionData = await PagosPseWService.getTransaction(id);
      if (transactionData.statusCode === 200 && transactionData.data.data) {
        if (typeof transactionData.data.data !== 'undefined') {
          setIsOpen(false)
        }
        setTransaction(transactionData);
      } else {
        setIsOpenReqError(true);
      }

    }
    if (id) {
      getTransactionData(id);
    }
  }, []);

  return(
    <nav className="topbar">
      <li>Inicio</li>
    </nav>
  )
}

export default InfoTab;