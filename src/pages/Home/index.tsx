import {
    Grid,
    IconButton,
    Typography,
    Container,
    InputAdornment,
    FilledInput,
    Paper,
} from '@mui/material'
import {
    Twitter,
    SearchRounded,
    NotificationsNoneRounded,
    EmailOutlined,
    BookmarkBorderOutlined,
    ListAltOutlined,
    PermIdentityOutlined,
} from '@mui/icons-material'

import Tweet from '@components/Tweet'
import style from './style.module.scss'

const Home: React.FC = () => {
    return (
        <Container className={style.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <ul className={style.list}>
                        <li>
                            <IconButton className={style.logo} color="primary">
                                <Twitter
                                    color="primary"
                                    className={style.logoIcon}
                                />
                            </IconButton>
                        </li>
                        <li>
                            <IconButton color="primary">
                                <SearchRounded className={style.listIcon} />
                            </IconButton>
                            <Typography
                                className={style.labelList}
                                variant="h6"
                            >
                                Поиск
                            </Typography>
                        </li>
                        <li>
                            <IconButton color="primary">
                                <NotificationsNoneRounded
                                    className={style.listIcon}
                                />
                            </IconButton>
                            <Typography
                                className={style.labelList}
                                variant="h6"
                            >
                                Уведомления
                            </Typography>
                        </li>
                        <li>
                            <IconButton color="primary">
                                <EmailOutlined className={style.listIcon} />
                            </IconButton>
                            <Typography
                                className={style.labelList}
                                variant="h6"
                            >
                                Сообщения
                            </Typography>
                        </li>
                        <li>
                            <IconButton color="primary">
                                <BookmarkBorderOutlined
                                    className={style.listIcon}
                                />
                            </IconButton>
                            <Typography
                                className={style.labelList}
                                variant="h6"
                            >
                                Избранное
                            </Typography>
                        </li>
                        <li>
                            <IconButton color="primary">
                                <ListAltOutlined className={style.listIcon} />
                            </IconButton>
                            <Typography
                                className={style.labelList}
                                variant="h6"
                            >
                                Список
                            </Typography>
                        </li>
                        <li>
                            <IconButton color="primary">
                                <PermIdentityOutlined
                                    className={style.listIcon}
                                />
                            </IconButton>
                            <Typography
                                className={style.labelList}
                                variant="h6"
                            >
                                Профиль
                            </Typography>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={style.tweetsWrapper} variant="outlined">
                        <Paper
                            className={style.tweetsHeader}
                            variant="outlined"
                        >
                            <Typography variant="h6"> Главная</Typography>
                        </Paper>
                        <Tweet />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <FilledInput
                        className={style.searchField}
                        placeholder="Поиск в твиттере"
                        fullWidth
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchRounded />
                            </InputAdornment>
                        }
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home
