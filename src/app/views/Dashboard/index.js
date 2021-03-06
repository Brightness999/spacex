import React, { useEffect } from "react";
import { Flex } from "app/components/common/ui";
import { LaunchTile } from "./components/LaunchTile";
import { FacilitiesTile } from "app/views/Dashboard/components/FacilitiesTile";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardData } from "app/redux/actions/dashboard";
import {
  selectActiveStarlinks,
  selectDashboard,
  selectWeather,
} from "app/redux/selectors";
import { StarlinkTile } from "app/views/Dashboard/components/StarlinkTile";
import { Loading } from "app/components/common/Loading";
import { Error } from "app/components/common/Error";
import { DashboardModal } from "app/views/Dashboard/components/DashboardModal";
import { TopPadder } from "../../components/common/TopPadder";
import { fetchWeatherData } from "app/redux/actions/weather";
import { animationProps } from "app/styles/animations";
import { setRoute } from "app/redux/slices/routeSlice";
import { fetchActiveStarlinks } from "app/redux/actions/activeStarlinks";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { launches, status } = useSelector(selectDashboard);
  const { count } = useSelector(selectActiveStarlinks);
  const weather = useSelector(selectWeather);

  useEffect(() => {
    dispatch(setRoute({ route: "Dashboard" }));

    if (!Object.keys(launches).length) {
      dispatch(fetchDashboardData());
    }
    if (!count?.activeCount) {
      dispatch(fetchActiveStarlinks());
    }
    if (!Object.keys(weather.weather).length) {
      dispatch(fetchWeatherData());
    }
  }, [dispatch, launches, weather.weather, count?.activeCount]);

  const launchTypes = ["next", "prev"];

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "failed" && <Error />}
      {status === "success" && (
        <>
          <TopPadder intensity="8" />
          <Flex alignItems="center" flexDirection="column" {...animationProps}>
            {launchTypes.map((launchType) => (
              <LaunchTile
                key={launchType}
                launch={launchType}
                detailsList={launches[launchType].detailsList}
                {...launches[launchType].data}
              />
            ))}
          </Flex>
          <Flex alignItems="center" flexDirection="column" {...animationProps}>
            <FacilitiesTile title="Launch facilities" data={weather} />
            <StarlinkTile title="Starlink" count={count?.activeCount} />
          </Flex>
          <DashboardModal />
        </>
      )}
    </>
  );
};
