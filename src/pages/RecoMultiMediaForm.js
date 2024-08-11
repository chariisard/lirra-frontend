import Navbar from "../components/Navbar";
import RecommendMultimedia from "../components/RecommendMultimedia";
import Grid from '@mui/material/Grid';

const RecoMultiMediaForm = () => {
    return (
        <div className="Reco">
            <Grid container>
                <Grid item xs={12}>
                    <Navbar />
                </Grid>
                <Grid item xs={12}>
                    <RecommendMultimedia />
                </Grid>
            </Grid>
        </div>
    );
}

export default RecoMultiMediaForm;