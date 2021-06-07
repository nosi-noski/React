import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";
import { useCommonStyles } from "../Styles/MicroserviceStyles";
const Home: FC = () => {
  const classes = useCommonStyles();
  return (
    <div className={classes.wrapper}>
      <Typography paragraph>Главная страница Админки. v 0.0.1</Typography>
    </div>
  );
};

export default Home;
