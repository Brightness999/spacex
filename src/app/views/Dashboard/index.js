import React, { useEffect } from "react";
import { Flex } from "app/components/common/ui";
import { LaunchTile } from "./components/LaunchTile";
import { FacilitiesTile } from "app/views/Dashboard/components/FacilitiesTile";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardData } from "app/redux/actions/dashboard";
import { selectDashboard } from "app/redux/selectors";
import { StarlinkTile } from "app/views/Dashboard/components/StarlinkTile";
import { Loading } from "app/components/common/Loading";
import { Error } from "app/components/common/Error";
import { Centerer } from "app/views/Dashboard/components/Centerer";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectDashboard);

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  return (
    <>
      <Centerer />
      {data.status === "loading" && <Loading />}
      {data.status === "failed" && <Error />}
      {data.status === "success" && (
        <>
          <Flex alignItems="center" flexDirection="column">
            <LaunchTile launch="next" {...data.launches.nextLaunch.data} />
            <LaunchTile launch="prev" {...data.launches.prevLaunch.data} />
          </Flex>
          <Flex alignItems="center" flexDirection="column">
            <FacilitiesTile title="Launch facilities" data={data.weather} />
            <StarlinkTile title="Starlink" count={data.starlink.activeCount} />
          </Flex>
        </>
      )}
    </>
  );
};
