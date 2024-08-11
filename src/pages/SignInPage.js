import SignIn from "../components/SignIn.js";
import SideImage from "../components/SideImage.js";
import Grid from '@mui/material/Grid';

const SignInPage = () => {
    return ( 
        <Grid container>
            <Grid item xs={12} md={7}>
                <SignIn />
            </Grid>
            <Grid item xs={12} md={5}>
                <SideImage />
            </Grid>
        </Grid>
    );
}
 
export default SignInPage;