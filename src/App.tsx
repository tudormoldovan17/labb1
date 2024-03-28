import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CarDetails from "./domain/car/CarDetails";
import ListCars from "./domain/car/ListCars";
import './App.css';
import AddCar from "./domain/car/AddCar";
import UpdateCar from "./domain/car/UpdateCar";
import DeleteCar from "./domain/car/DeleteCar";
import CarChart from "./domain/car/CarChart";

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<ListCars />} />
            <Route path="/car/:id" element={<CarDetails />} />
            <Route path="/addcar" element={<AddCar />} />
            <Route path="/updatecar/:id" element={<UpdateCar />} />
            <Route path="/deletecar/:id" element={<DeleteCar />} />
            <Route path="/carchart" element={<CarChart />} />
        </Routes>
      </Router>
  );
};

export default App;
