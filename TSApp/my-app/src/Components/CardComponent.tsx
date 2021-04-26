import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import s from "./CardComponent.module.css";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";
import classnames from "classnames";
//
// const useStyles = makeStyles({
//     root: {
//         minWidth: '150px',
//         width: '250px',
//         height: '250px',
//         margin: '5px'
//     },
//     bullet: {
//         display: 'inline-block',
//         margin: '0 2px',
//         transform: 'scale(0.8)',
//     },
//     title: {
//         fontSize: 14,
//     },
//     pos: {
//         marginBottom: 12,
//     },
//
//     cardContent: {
//         height: '60%'
//     },
//
//     cardActions: {
//         height: '20%'
//
//     }
// });

interface CardProps {
  header: string;
  title: string;
  bottomTitle?: string;
  text?: string;
  link?: string;
  bcgColor?: string;
}

export function CardComponent(props: CardProps) {
  // const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

  const color = props.bcgColor || "cardRedColor";
  return (
    <Card className={s.root + " " + s[color]}>
      <CardContent className={s.cardContent}>
        <Typography className={s.title} color="textSecondary" gutterBottom>
          {props.header}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography className={s.pos} color="textSecondary">
          {props.bottomTitle}
        </Typography>
        <Typography variant="body2" component="p">
          {props.text}
        </Typography>
      </CardContent>

      <CardActions className={s.cardActions}>
        <Link href={props.link} target="blank" color="primary" variant="body2">
          Link
        </Link>
      </CardActions>
    </Card>
  );
}
