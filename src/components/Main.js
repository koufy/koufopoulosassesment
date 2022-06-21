import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Paper, Grid, TextField, Button } from '@mui/material';




const Main = ({ Logout }) => {
    const [universities, setUniversities] = useState(undefined);
    const [country, setCountry] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://universities.hipolabs.com/search', { params: { 'country': country } })
            .then((response) => {
                console.log('res', response.data);
                setUniversities(response.data);
                setIsLoading(false)
            });
    }, [country])


    const onResetFilters = () => {
        setIsLoading(true);
        setCountry('')
    }


    return (
        <>
            <h1>welcome </h1>
            <Button
                sx={{ m: 2, p: 1 }}
                onClick={Logout}
                variant="contained"
                color="primary"
                size="small"
            >
                Logout
            </Button>
            < br />
            { isLoading ? <div>Loading...</div>:
             <>
                        <TextField
                            type="text"
                            value={country}
                            onChange={(event) => setCountry(event.target.value)}
                            label="search by country"
                        />
                        <br />
                        <Button
                            sx={{ m: 1 }}
                            onClick={onResetFilters}
                            variant="contained"
                            color="secondary"
                            size="small"
                        >
                            Reset filters
                        </Button>
                        <Grid container justify="center">
                            <Grid item xs={1} sm={12}>
                                <Paper
                                    justify="center"
                                    sx={{ backgroundColor: 'antiquewhite' }}>
                                    {universities?.map((uni, index) => (<div key={index} >{uni?.name}</div>))}
                                </Paper>
                            </Grid>
                        </Grid>
                    </>
            }
        </>
    )
}
export default Main;