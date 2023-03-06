import { createSlice } from "@reduxjs/toolkit";
import {
  modelY,
  modelX,
  model3,
  modelS,
  accessories,
  solarPanel,
  solarRoof,
} from "../../assets";

const initialState = {
  carAddress: [
    { name: "Model S", link: "#modelS" },
    { name: "Model 3", link: "#model3" },
    { name: "Model X", link: "#modelX" },
    { name: "Model Y", link: "#modelY" },
  ],
  carCollection: [
    {
      id: "modelS",
      title: "Model S",
      description: "Order Online for Touchless Delivery",
      image: modelS,
      leftButtonText: "Custom Order",
      rightButtonText: "Existing Inventory",
    },
    {
      id: "modelY",
      title: "Model Y",
      description: "Order Online for Touchless Delivery",
      image: modelY,
      leftButtonText: "Custom Order",
      rightButtonText: "Existing Inventory",
    },
    {
      id: "model3",
      title: "Model 3",
      description: "Order Online for Touchless Delivery",
      image: model3,
      leftButtonText: "Custom Order",
      rightButtonText: "Existing Inventory",
    },
    {
      id: "modelX",
      title: "Model X",
      description: "Order Online for Touchless Delivery",
      image: modelX,
      leftButtonText: "Custom Order",
      rightButtonText: "Existing Inventory",
    },
    {
      id: "solarPanel",
      title: "Lowest Cost Solar Panel in America",
      description: "Money-back guarantee",
      image: solarPanel,
      leftButtonText: "Order now",
      rightButtonText: "Learn more",
    },
    {
      id: "solarRoof",
      title: "Solar for New Roofs",
      description: "Solar Roof Costs Less Than a New Range Rover",
      image: solarRoof,
      leftButtonText: "Order now",
      rightButtonText: "Learn more",
    },
    {
      id: "accessories",
      title: "Accessories",
      description: "",
      image: accessories,
      leftButtonText: "Shop now",
    },
  ],
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.cars.carAddress;
export const showcaseCars = (state) => state.cars.carCollection;
export default carSlice.reducer;
