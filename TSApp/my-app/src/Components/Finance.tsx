import React from "react";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { NavBar } from "./NavBar";

const useStyles = makeStyles({
  paper: {
    margin: "20px",

    // backgroundColor: "#e8e8e88a",
    // zIndex: 0
  },
  paperHeader: {
    margin: "10px",
    fontWeight: 600,
    fontSize: "20px",
    // backgroundColor: '#d2d2d4',
    // boxShadow: '0px 10px 13px -6px rgb(0 0 0 / 20%), 0px 20px 31px 3px rgb(0 0 0 / 14%), 0px 8px 38px 7px rgb(0 0 0 / 12%)',
  },
  paperBody: {
    margin: "10px",
  },
  boldElem: {
    fontWeight: 600,
    fontSize: "16px",
  },
  currencyBoldElem: {
    fontWeight: 600,
    fontSize: "16px",
    paddingRight: "5px",
  },
  currencyElem: {
    paddingRight: "10px",
  },
  root: {
    margin: "auto",
    padding: "20px",
  },
  paperWrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
});

const state = {
  news: [
    {
      id: 1,
      isMain: true,
      title: "Греф заявил об избытке денег на рынке, «которого не видел мир»",
    },
    {
      id: 2,
      isMain: false,
      title:
        "Итоги акции за Навального, интервью Германа Грефа. Главное за ночь",
    },
    {
      id: 3,
      isMain: false,
      title:
        "Владельцы двух онлайн-кинотеатров начали переговоры об объединении",
    },
    { id: 4, isMain: false, title: "Посол США покинул дипмиссию в Москве" },
    {
      id: 5,
      isMain: false,
      title:
        "Первый банк запустил переводы по телефону через систему ЦБ в банкоматах",
    },
    {
      id: 6,
      isMain: false,
      title:
        "Греф рассказал о правилах участия в митингах для сотрудников Сбербанка",
    },
    {
      id: 7,
      isMain: false,
      title:
        "Металлурги предложили скидки на металл для государственных строек",
    },
    {
      id: 8,
      isMain: false,
      title: "Греф ответил на статью про «развод» с Mail.ru Group",
    },
    {
      id: 9,
      isMain: false,
      title: "Потребление свинины достигло пика в новейшей истории России",
    },
    {
      id: 10,
      isMain: false,
      title: "СМИ узнали о подорожании нацпроекта по туризму",
    },
    {
      id: 11,
      isMain: false,
      title:
        "Греф не увидел повода для «радикального» повышения ключевой ставки",
    },
    { id: 12, isMain: false, title: "Срок давности по делу Меня истек" },
    {
      id: 13,
      isMain: false,
      title:
        "СМИ узнали о просьбе Максаковой проверить статус вора в законе Тюрина",
    },
    {
      id: 14,
      isMain: false,
      title: "Протесты сторонников Навального в Москве. Видео",
    },
    {
      id: 15,
      isMain: false,
      title:
        "РБК Pro: как чатботы собирают долги по кредитам в индийских деревнях",
    },
  ],
  currency: [
    {
      id: 1,
      title: "Нал.",
      currency: "USD",
      sell: "76,85",
      buy: "76,09",
      lag: "",
    },
    {
      id: 2,
      title: "Нал.",
      currency: "EUR",
      sell: "92,45",
      buy: "91,64",
      lag: "",
    },
    {
      id: 3,
      title: "Бирж.",
      currency: "USD",
      sell: "76,46",
      buy: "",
      lag: "-0,14",
    },
    {
      id: 4,
      title: "Бирж.",
      currency: "EUR",
      sell: "92,09",
      buy: "",
      lag: "-0,09",
    },
    {
      id: 5,
      title: "ЦБ.",
      currency: "USD",
      sell: "76,82",
      buy: "",
      lag: "+0,80",
    },
    {
      id: 6,
      title: "ЦБ.",
      currency: "EUR",
      sell: "92,29",
      buy: "",
      lag: "+0,54",
    },
    {
      id: 7,
      title: "EUR/USD",
      currency: "",
      sell: "1,2043",
      buy: "",
      lag: "+0,0009",
    },
    {
      id: 8,
      title: "BTC/USD",
      currency: "",
      sell: "54 419,00",
      buy: "",
      lag: "+530,00",
    },
  ],
};

export function Finance() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <div className={classes.paperWrapper}>
        <Paper className={classes.paper} elevation={20}>
          <Typography className={classes.paperHeader} variant="h6">
            Главные новости
          </Typography>
          <Typography className={classes.paperBody}>
            <ul>
              {state.news.map((elem, index) => {
                return (
                  <li
                    key={elem.id}
                    className={elem.isMain ? classes.boldElem : ""}
                  >
                    {elem.title}
                  </li>
                );
              })}
            </ul>
          </Typography>
        </Paper>
        <Paper />
        <Paper className={classes.paper} elevation={20}>
          <Typography className={classes.paperHeader}>Курс валют</Typography>
          <Typography className={classes.paperBody} color="textSecondary">
            <table>
              <tbody>
                {state.currency.map((elem, index, array) => {
                  const hasType =
                    index === 0
                      ? true
                      : index > 0 &&
                        array[index].title !== array[index - 1].title
                      ? true
                      : false;

                  return (
                    <tr key={elem.id}>
                      <td className={classes.currencyBoldElem}>
                        {hasType && elem.title}
                      </td>
                      <td className={classes.currencyElem}>{elem.currency}</td>
                      <td className={classes.currencyElem}>{elem.sell}</td>
                      <td>{elem.buy || elem.lag}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Typography>
        </Paper>
      </div>
    </div>
  );
}
