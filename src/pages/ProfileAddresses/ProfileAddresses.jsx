import React, { useCallback } from "react";
import {
  useParams,
} from "react-router-dom";
import AddAddress from "../../components/AddAddress";
import NewAddresses from "../../components/NewAddresses/NewAddresses";


const ProfileAddresses = () => {
  const { id } = useParams();
  const renderAddress = useCallback(() => {
    if (id !== undefined) {
      return <NewAddresses />;
    }
    if (!id) {
      return <AddAddress />;
    }

  }, [id]);

  return (
    <div className="right-side addresses">
      {renderAddress()}
    </div>
  );
};

export default ProfileAddresses;
