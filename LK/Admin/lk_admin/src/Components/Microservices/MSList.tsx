import React from "react";
import EnhancedTable from "./Table/EnhancedTable";
import { MSCRows, MSCHeads } from "../../InitialData/MicroserviceConfigs";
import { Order } from "./../../Interfaces/MicroserviceInterfaces";

const MSList = () => {
  return <EnhancedTable heads={MSCHeads} rows={MSCRows} order={Order.asc} />;
};

export default MSList;
