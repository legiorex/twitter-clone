import React, { FC } from "react";
import { Typography, Button } from "@material-ui/core";
import {
  Twitter,
  Search,
  PeopleOutline,
  ChatBubbleOutlineOutlined as MessageIcon,
} from "@material-ui/icons";
import style from "./style.module.scss";

const SignIn: FC = () => {
  return (
    <div className={style.wrapper}>
      <section className={style.blueSide}>
        <Twitter color="primary" className={style.twitterBigIcon} />
        <ul className={style.listInfo}>
          <li>
            <Typography variant="h6">
              <Search />
              Читайте том, что вам интересно.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <PeopleOutline />
              Узнайте, о чём говорят в мире.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <MessageIcon />
              Присоединяйтесь в общению
            </Typography>
          </li>
        </ul>
      </section>
      <section className={style.loginSide}>
        <div className={style.loginWrapper}>
          <Twitter color="primary" className={style.twitterIcon} />
          <Typography variant="h4" className={style.loginTitle}>
            Узнайте, что происходит в мире прямо сейчас.
          </Typography>
          <Typography>
            <b>Присоединяйтесь к Твиттеру примо сейчас!.</b>
          </Typography>
          <Button variant="contained" color="primary" fullWidth>
            Зарегистрироваться
          </Button>
          <Button variant="outlined" color="primary" fullWidth>
            Войти
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
