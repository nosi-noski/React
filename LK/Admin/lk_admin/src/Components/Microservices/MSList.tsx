import React from "react";
import EnhancedTable from "./Table/EnhancedTable";
import { MSCRows, MSCHeads } from "../../InitialData/MicroserviceConfigs";

const MSList = () => {
  return (
    <div>
      <EnhancedTable
        pagination={[5, 10, 25, 50]}
        heads={MSCHeads}
        rows={MSCRows}
      />
    </div>
  );
};

export default MSList;
