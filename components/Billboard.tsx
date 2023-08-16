import React, { useCallback } from "react";
import useBillboard from "@/hooks/useBillboard";

const Billboard: React.FC = () => {
  const { data } = useBillboard();

  return <div></div>;
};

export default Billboard;
