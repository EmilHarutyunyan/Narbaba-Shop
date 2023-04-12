import React, { useCallback } from "react";
import { useParams } from "react-router-dom";
import AddPaymentMethods from "../../components/AddPaymentMethods/AddPaymentMethods";
import NewPaymentMethods from "../../components/NewPaymentMethods";

const ProfilePaymentMethods = () => {
  const { id } = useParams();
  const renderPayment = useCallback(() => {
    if (id !== undefined) {
      return <NewPaymentMethods />;
    }
    if (!id) {
      return <AddPaymentMethods />;
    }
  }, [id]);
  return <div className="right-side">{renderPayment()}</div>;
};

export default ProfilePaymentMethods;
