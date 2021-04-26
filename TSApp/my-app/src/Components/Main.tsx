import React from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import clsx from "clsx";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

import { NavBar } from "./NavBar";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

const topics = [
  {
    title: `Минтруд сообщил, когда даст комментарии по длинным майским выходным`,
    subtitle: "",
    body: `Министерство труда даст комментарии по нерабочим дням между майскими праздниками только после публикации соответствующего президентского указа. Об этом представитель Минтруда заявил РБК.
        Ранее президент Владимир Путин согласился с предложением Роспотребнадзора сделать нерабочими дни между майскими праздниками.
        `,
  },
  {
    title: `Металлурги предложили скидки на металл для государственных строек Так они ответили на призыв властей компенсировать рост цен на стройматериалы`,
    subtitle: `Крупные металлургические компании решили предоставить скидки на металл для государственных строительных проектов. С такой инициативой они выступили, после того как в правительстве обсудили меры регулирования цен на их продукцию`,
    body: `Крупнейшие металлургические компании, входящие в ассоциацию «Русская сталь» (в нее входят «Северсталь», «Мечел», группа НЛМК и др.), решили предоставить скидки на металл для государственных строительных проектов.
Об этом говорится в письме председателя наблюдательного совета «Русской стали» и владельца Объединенной металлургической компании (ОМК) Анатолия Седых, которое он отправил 19 апреля министру промышленности Денису Мантурову. О содержании обращения РБК рассказали три источника, близких к разным металлургическим компаниям. Представитель «Русской стали» подтвердил факт отправки письма. РБК направил запросы в пресс-службы Минпромторга и Минстроя.
Какие условия предлагают металлурги
По словам собеседников РБК, «Русская сталь» предлагает заключить договоры на поставку металла для госстроек со скидками к рыночным ценам, зафиксировать их на весь срок реализации проекта, а также предусмотреть частичную предоплату и отгрузку минимальными партиями. Но размер конкретных скидок в письме не указывается.
Во вторник, 20 апреля, гендиректор «Металлоинвеста» (входит в «Русскую сталь») Назим Эфендиев на встрече с министром строительства Иреком Файзуллиным подтвердил готовность компании «предоставить гибкие условия поставок металлопроката под конкретные потребности строителей в значимых инфраструктурных проектах на долгосрочной основе». Об этом сообщила пресс-служба министерства по итогам. На встрече обсуждались такие крупные инфраструктурные проекты, как модернизация Восточного полигона РЖД — расширение Байкало-Амурской магистрали (БАМ) и Транссиба, а также строительство скоростной автомобильной дороги М-12 Москва — Нижний Новгород — Казань.
Но в письме Седых подчеркивается, что принципы ценообразования и заключения договоров на льготных условиях для госстроек, а также меры контроля поставок металла необходимо согласовать с Федеральной антимонопольной службой (ФАС), чтобы не допустить перепродажи сырья на рынке, пересказывают источники его аргументы. В пресс-службе ФАС сообщили, что пока не получали информацию от «Русской стали». В случае поступления предложения будут рассмотрены в установленном порядке, сказал представитель ведомства.
Металлурги ждут от Минстроя перечень крупных социальных и инфраструктурных государственных строек, финансируемых за счет средств федерального бюджета на 2021 год, а также список видов и объемов металлопроката, заказчиков по каждому объекту, с которыми будут заключаться такие договоры на особых условиях. Объемы поставок металлопродукции будут распределены между предприятиями, входящими в ассоциацию «Русская сталь», с учетом их возможностей и географического присутствия, говорится в письме.
`,
  },
];

export function Main() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    debugger;
    setExpanded(!expanded);
  };

  return (
    <>
      <NavBar />
      {topics.map((item, index) => {
        return (
          <Container fixed key={index}>
            <Paper elevation={20}>
              <Typography
                variant="h4"
                component="h2"
                style={{
                  backgroundColor: "#cfe8fc",
                  fontWeight: "bold",
                  padding: "10px 20px",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="h4"
                component="h2"
                style={{ backgroundColor: "#cfe8fc", padding: "10px 20px" }}
              >
                {item.subtitle}
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  backgroundColor: "#cfe8fc",
                  marginBottom: "20px",
                  padding: "10px 20px",
                }}
              >
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  {item.body}
                </Collapse>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Typography>
            </Paper>
          </Container>
        );
      })}
    </>
  );
}
