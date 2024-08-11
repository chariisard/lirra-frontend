import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Grid from '@mui/material/Grid';

const Home = () => {
    return ( 
        <div className="Home">
            <Grid container>
                <Grid item xs={12}>
                    <Navbar />
                </Grid>
                <Grid item xs={12}>
                    <Dashboard />
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Home;