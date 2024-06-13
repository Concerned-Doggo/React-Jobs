import React from "react";
import Cliploader from "react-spinners/ClipLoader";

const Spinner = ({ loading }) => {
    const override = {
        display: 'block',
        margin: '100px auto'
    }
  return <Cliploader color="#4338ca" loading={loading} cssOverride={override} size={150} />;
};

export default Spinner;
