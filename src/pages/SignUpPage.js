import SignUp from "../components/SignUp.js";
import SideImage from "../components/SideImage.js";
import Grid from '@mui/material/Grid';

const SignUpPage = () => {
    return (
        <Grid container>
            <Grid item xs={12} md={7}>
                <SignUp />
            </Grid>
            <Grid item xs={12} md={5}>
                <SideImage />
            </Grid>
        </Grid>
    );
}

export default SignUpPage;