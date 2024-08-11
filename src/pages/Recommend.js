import Navbar from "../components/Navbar";
import RecommendContent from "../components/RecommendContent";
import Grid from '@mui/material/Grid';

const Recommend = () => {
    return (
        <div className="Recommend">
            <Grid container>
                <Grid item xs={12}>
                    <Navbar />
                </Grid>
                <Grid item xs={12}>
                    <RecommendContent />
                </Grid>
            </Grid>
        </div>
    );
}

export default Recommend;