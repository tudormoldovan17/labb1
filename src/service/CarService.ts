import axios from 'axios';
import {Car} from "../Types";


const CarService = {
    getAllCars: async () => {
        try {
            const response = await axios.get("http://localhost:8000/cars/");
            return response.data;
        } catch (error) {
            throw new Error('Unable to fetch cars from the server.');
        }
    },

    getCars: async (page: number = 1, pageSize: number = 10) => {
        try {
            const response = await axios.get("http://localhost:8000/cars/", {
                params: {
                    page: page,
                    page_size: pageSize,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error('Unable to fetch cars from the server.');
        }
    },

    getCarById: async (id: number) => {
        try {
            const response = await axios.get(`http://localhost:8000/cars/${id}/`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching car data');
        }
    },

    addCar: async (carData: Omit<Car, 'id'>) => {
        try {
            const response = await axios.post(`http://localhost:8000/cars/`, carData);
            return response.data as Car;
        } catch (error) {
            throw new Error('Unable to add car to the server.');
        }
    },

    deleteCar: async (carId: number) => {
        try {
            const response = await axios.delete(`http://localhost:8000/cars/${carId}/`);
            return response.data;
        } catch (error) {
            throw new Error('Unable to delete car from the server.');
        }
    },

    updateCar: async (carData: Car) => {
        try {
            const response = await axios.put<Car>(`http://localhost:8000/cars/${carData.id}/`, carData);
            return response.data;
        } catch (error) {
            throw new Error('Unable to update car on the server.');
        }
    },

    getHorsepowers: async () => {
        try {
            const response = await axios.get<number[]>(`http://127.0.0.1:8000/horsepowers/`);
            return response.data;
        } catch (error) {
            throw new Error('Unable to fetch horsepower values from the server.');
        }
    },

    async getCarsByHorsepower(horsepower: number) {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/cars/horsepower/${horsepower}/`);
            return response.data;
        } catch (error) {
            throw new Error('Unable to fetch cars by horsepower from the server.');
        }
    },
};

export default CarService;
