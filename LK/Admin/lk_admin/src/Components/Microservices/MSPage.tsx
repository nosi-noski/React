import React, { FC } from "react";
import MSList from "./MSList";
import { useCommonStyles } from "../../Styles/MicroserviceStyles";

const MsPage: FC = () => {
  const classes = useCommonStyles();
  return (
    <div className={classes.wrapper}>
      <MSList />
    </div>
  );
};

export default MsPage;
