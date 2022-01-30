import React, { FC, useState } from "react";
import { Typography, Button } from "@material-ui/core";
import {
  Twitter,
  Search,
  PeopleOutline,
  ChatBubbleOutlineOutlined as MessageIcon,
} from "@material-ui/icons";
import style from "./style.module.scss";
import SignIn from "./Modals/SignIn";
import SignUp from "./Modals/SignUp";

const StartPage: FC = () => {
  const [openModal, setOpenModal] = useState<"signIn" | "signUp" | "">("");
  const onCloseModal = () => setOpenModal("");

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
          <Button
            onClick={() => setOpenModal("signUp")}
            variant="contained"
            color="primary"
            fullWidth
          >
            Зарегистрироваться
          </Button>
          <Button
            onClick={() => setOpenModal("signIn")}
            variant="outlined"
            color="primary"
            fullWidth
          >
            Войти
          </Button>
        </div>
      </section>
      <SignIn open={openModal === "signIn"} onClose={onCloseModal} />
      <SignUp open={openModal === "signUp"} onClose={onCloseModal} />
    </div>
  );
};

export default StartPage;
