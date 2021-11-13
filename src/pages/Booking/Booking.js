import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Box } from '@mui/system';
import useAuth from '../../hooks/useAuth';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import './Booking.css'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';


const Booking = () => {
    const { id } = useParams()
    const { user } = useAuth();
    const [bookingCar, setBookingCar] = useState({})
    const [bookingDone, setBookingDone] = useState(false)
    useEffect(() => {
        fetch(`https://serene-peak-88325.herokuapp.com/allCars/${id}`)
            .then(res => res.json())
            .then(data => setBookingCar(data))
    }, [id]);

    const initialInfo = { name: user.displayName, email: user.email, phone: '', address: '' };

    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlue = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        console.log(newInfo)
        setBookingInfo(newInfo)
        e.preventDefault();
    }

    const handleBookingSubmit = e => {

        e.preventDefault();
        const booking = {
            ...bookingInfo,
            bookingCarName: bookingCar.name,
            bookingStatus: 'pending'

        }
        // send to server 

        fetch('https://serene-peak-88325.herokuapp.com/bookingCar', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                const proceed = window.confirm('Order confirm?')
                if (proceed) {
                    if (data.insertedId) {
                        setBookingInfo('');
                        setBookingDone(true)


                    }
                }
            })

    }
    return (
        <Box>
            <Navigation></Navigation>
            <Typography sx={{ mb: 5 }} className="heading" variant='h4'>Book Your Car</Typography>
            <Container>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <img className="car-img" src={bookingCar.img} alt="" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4">{bookingCar.name}</Typography>
                            <Typography variant="h6"> Price: {bookingCar.price}</Typography>
                            <Typography variant="p"> Description: {bookingCar.description}</Typography>
                        </Grid>

                    </Grid>
                </Box >

                <Box className="booking" >
                    {bookingDone && <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        {bookingCar.name} Booked <strong>Successfully </strong>
                    </Alert>}
                    <form onSubmit={handleBookingSubmit}>

                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="outlined-size-small"
                            name="name"
                            onBlur={handleOnBlue}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlue}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField

                            sx={{ width: '50%', m: 1 }}
                            id="outlined-size-small"
                            name="car"
                            value={bookingCar.name}
                            size="small"
                        />
                        <TextField

                            sx={{ width: '50%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            type="number"
                            onBlur={handleOnBlue}
                            placeholder="Phone"
                            size="small"
                        />

                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="outlined-size-small"
                            name="address"
                            onBlur={handleOnBlue}
                            size="small"
                            placeholder="Address"

                        />
                        <Button type='submit' variant="contained">Booked</Button>
                    </form>
                </Box>
            </Container>
            <Footer></Footer>
        </Box>
    );
};

export default Booking;