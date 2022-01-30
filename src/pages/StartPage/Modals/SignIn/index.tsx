import {
    Dialog,
    DialogTitle,
    DialogContent,
    FormControl,
    FormGroup,
    TextField,
    IconButton,
    Button,
} from '@mui/material'
import { Close } from '@mui/icons-material'
import style from './style.module.scss'

type Props = {
    open: boolean
    onClose: () => void
}

const SingIn: React.FC<Props> = ({ open, onClose }) => {
    return (
        <Dialog className={style.dialog} open={open} onClose={onClose}>
            <DialogTitle>
                <IconButton onClick={onClose} color="secondary">
                    <Close style={{ fontSize: 26 }} />
                </IconButton>
                Войти в твиттер
            </DialogTitle>
            <DialogContent>
                <FormControl component="fieldset" fullWidth>
                    <FormGroup aria-label="position" row>
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
                            type={'email'}
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
                            Войти
                        </Button>
                    </FormGroup>
                </FormControl>
            </DialogContent>
        </Dialog>
    )
}

export default SingIn
