import { Paper, Typography, Grid, Avatar } from '@mui/material'
import style from './style.module.scss'

const Tweet: React.FC = () => {
    return (
        <Paper className={style.tweetsHeader} variant="outlined">
            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <Avatar
                        alt="User Avatar"
                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    />
                </Grid>
                <Grid item xs={11}>
                    <Typography>
                        <b>fff </b>
                        <span className={style.userName}>@fff</span>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Опунция (лат. Opuntia) — род растений семейства
                        Кактусовые (Cactaceae). По разнообразию видов,
                        количество которых достигает около 300[4], этот род
                        является одним из самых крупных в семействе.
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Tweet
