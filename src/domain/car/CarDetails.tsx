import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Paper } from '@mui/material';
import { Car } from '../../Types';
import CarService from "../../service/CarService";

const CarDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [car, setCar] = useState<Car | null>(null);

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const carData = await CarService.getCarById(parseInt(id ?? ""));
                setCar(carData);
            } catch (error: any) {
                console.error('Error fetching car:', error.message);
            }
        };

        fetchCar();
    }, [id]);

    if (!car) {
        return (
            <Typography variant="h6">
                Car not found.
            </Typography>
        );
    }

    return (
        <div>
            <Typography variant="h4" gutterBottom>Car Details</Typography>
            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                <Typography variant="body1" gutterBottom><strong>Id: </strong> {car.id}</Typography>
                <Typography variant="body1" gutterBottom><strong>Name: </strong> {car.name}</Typography>
                <Typography variant="body1" gutterBottom><strong>Horsepower: </strong> {car.horsepower}</Typography>
                <Typography variant="body1" gutterBottom><strong>Color: </strong> {car.color}</Typography>
                <Typography variant="body1" gutterBottom><strong>Year: </strong> {car.year}</Typography>
                <Typography variant="body1" gutterBottom><strong>Country: </strong> {car.country}</Typography>
            </Paper>
        </div>
    );
};

export default CarDetails;
