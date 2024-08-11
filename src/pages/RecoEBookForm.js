import Navbar from "../components/Navbar";
import RecommendEBook from "../components/RecommendEBook";
import Grid from '@mui/material/Grid';

const RecoEBookForm = () => {
    return (
        <div className="Reco">
            <Grid container>
                <Grid item xs={12}>
                    <Navbar />
                </Grid>
                <Grid item xs={12}>
                    <RecommendEBook />
                </Grid>
            </Grid>
        </div>
    );
}

export default RecoEBookForm;