import Navbar from "../components/Navbar";
import RecommendMagazine from "../components/RecommendMagazine";
import Grid from '@mui/material/Grid';

const RecoMagazineForm = () => {
    return (
        <div className="Reco">
            <Grid container>
                <Grid item xs={12}>
                    <Navbar />
                </Grid>
                <Grid item xs={12}>
                    <RecommendMagazine />
                </Grid>
            </Grid>
        </div>
    );
}

export default RecoMagazineForm;