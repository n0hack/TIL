import React, { useState } from "react";
import FlagSwitch from "./FlagSwitch";
import ViewFlagValue from "./ViewFlagValue";

function SwitchContainer() {
  const [flag, setFlag] = useState(false);
  const handleUpdateFlag = () => setFlag(!flag);

  return (
    <div>
      <FlagSwitch onClick={handleUpdateFlag} />
      <ViewFlagValue flag={flag} />
    </div>
  );
}

export default SwitchContainer;
