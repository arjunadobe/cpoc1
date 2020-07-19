import React, { useState } from "react";
import CameraHandler from "../cameraHandler/CameraHandler";

import { AppCodeContext } from "../../app-code-context";

const ScannerPrototype = () => {
  const [code, setCodeData] = useState("");
  const [type, setTypeData] = useState("");
  const setCode = (value) => {
    setCodeData(value);
  };
  const setType = (value) => {
    setTypeData(value);
  };
  return (
    <AppCodeContext.Provider value={{ code, setCode, type, setType }}>
      <div className="card-container">
        <CameraHandler />
      </div>
    </AppCodeContext.Provider>
  );
};
export default ScannerPrototype;
