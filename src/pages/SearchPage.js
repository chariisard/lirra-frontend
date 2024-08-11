import Navbar from "../components/Navbar";
import RecommendContent from "../components/RecommendContent";
import Grid from '@mui/material/Grid';

const Recommend = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Navbar />
            </Grid>
            <Grid item xs={12}>
                <RecommendContent />
            </Grid>
        </Grid>
    );
}

export default Recommend;