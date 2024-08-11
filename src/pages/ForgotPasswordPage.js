import ForgotPassword from "../components/ForgotPassword.js";
import SideImage from "../components/SideImage.js";
import Grid from '@mui/material/Grid';

const ForgotPasswordPage = () => {
    return (
        <Grid container>
            <Grid item xs={12} md={7}>
                <ForgotPassword />
            </Grid>
            <Grid item xs={12} md={5}>
                <SideImage />
            </Grid>
        </Grid>
    );
}

export default ForgotPasswordPage;