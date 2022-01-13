import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardMedia, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

const HomeCarDisplay = ({ car }) => {
    const { name, price, description, _id, img } = car;
    return (
        <Grid item xs={12} md={4}>
            <Card className="card" sx={{ maxWidth: 345, height: 1 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent sx={{ py: 5 }}>
                        <Typography sx={{ color: 'info.main', fontWeight: 600 }} gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            {price}$
                        </Typography>
                        <Typography sx={{ my: 5 }} variant="body2" color="text.secondary">
                            {description}
                        </Typography>

                    </CardContent>
                </CardActionArea>
                <Box className="buttonDesign" >

                    <Link to={`/booking/${_id}`} style={{ textDecoration: 'none', color: 'white', align: "right" }}> <Button variant="outlined"> Book now</Button></Link>

                </Box>
            </Card>
        </Grid>
    );
};

export default HomeCarDisplay;