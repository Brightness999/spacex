import { createAsyncThunk } from "@reduxjs/toolkit";
import { COORDINATES } from "app/constants/coordinates";
import { api } from "app/api";

export const fetchDashboardData = createAsyncThunk(
  "dashboard/data",
  async (dispatch, getState) => {
    const [
      nextLaunchResponse,
      prevLaunchResponse,
      canaveralResponse,
      starbaseResponse,
      vandenbergResponse,
      starlinkCountResponse,
    ] = await Promise.all([
      api.launch.getNextLaunch(),
      api.launch.getPrevLaunch(),
      api.weather.getWeatherData(COORDINATES.CANAVERAL),
      api.weather.getWeatherData(COORDINATES.STARBASE),
      api.weather.getWeatherData(COORDINATES.VANDENBERG),
      api.starlink.getActiveCount(),
    ]);

    console.log({ prevLaunchResponse, nextLaunchResponse });
    console.log({ canaveralResponse, starbaseResponse, vandenbergResponse });
    console.log({ activeStarlinks: starlinkCountResponse });

    return {
      launches: {
        prevLaunch: prevLaunchResponse,
        nextLaunch: nextLaunchResponse,
      },
      weather: {
        canaveral: canaveralResponse,
        starbase: starbaseResponse,
        vandenberg: vandenbergResponse,
      },
      starlink: {
        activeCount: starlinkCountResponse,
      },
    };
  }
);

export const dashboard = {
  fetchDashboardData,
};
