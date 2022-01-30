import React, { FC } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  FormGroup,
  TextField,
  IconButton,
  Button,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import style from "./style.module.scss";

type Props = {
  open: boolean;
  onClose: () => void;
};

const SignUp: FC<Props> = ({ open, onClose }) => {
  return (
    <Dialog className={style.dialog} open={open} onClose={onClose}>
      <DialogTitle>
        <IconButton onClick={onClose} color="secondary">
          <Close style={{ fontSize: 26 }} />
        </IconButton>
        Создайте учётную запись
      </DialogTitle>
      <DialogContent>
        <FormControl component="fieldset" fullWidth>
          <FormGroup aria-label="position" row>
            <TextField
              className={style.loginSideField}
              autoFocus
              id="name"
              label="Имя"
              fullWidth
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
              type={"name"}
            />
            <TextField
              className={style.loginSideField}
              autoFocus
              id="email"
              label="Email Address"
              fullWidth
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
              type={"email"}
            />
            <TextField
              className={style.loginSideField}
              autoFocus
              id="password"
              label="Пароль"
              fullWidth
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
              type="password"
            />
            <Button variant="contained" color="primary" fullWidth>
              Далее
            </Button>
          </FormGroup>
        </FormControl>
      </DialogContent>
    </Dialog>
  );
};

export default SignUp;
