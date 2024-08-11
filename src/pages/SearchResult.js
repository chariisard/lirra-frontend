import Navbar from "../components/Navbar";
import Grid from '@mui/material/Grid';
import Search from "../components/Search";

const SearchResult = () => {
    return (
        <div className="Reco">
            <Grid container>
                <Grid item xs={12}>
                    <Navbar />
                </Grid>
                <Grid item xs={12}>
                    <Search />
                </Grid>
            </Grid>
        </div>
    );
}

export default SearchResult;