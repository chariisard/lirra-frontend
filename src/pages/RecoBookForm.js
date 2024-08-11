import Navbar from "../components/Navbar";
import RecommendBook from "../components/RecommendBook";
import Grid from '@mui/material/Grid';

const RecoBookForm = () => {
    return (
        <div className="Reco">
            <Grid container>
                <Grid item xs={12}>
                    <Navbar />
                </Grid>
                <Grid item xs={12}>
                    <RecommendBook />
                </Grid>
            </Grid>
        </div>
    );
}

export default RecoBookForm;