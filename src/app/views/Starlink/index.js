import { getLatLngObj } from "tle.js";
import { pageVariantsAnim } from "./animations";
// import { StarlinkInfo } from "./StarlinkInfo/StarlinkInfo";

import React, { useEffect, useState, useCallback, useRef } from "react";
import styled from "styled-components/macro";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { fetchStarlinkData } from "app/redux/actions/starlink";
import { selectStarlink } from "app/redux/selectors";
import { Flex } from "app/components/common/ui";
import { setRoute } from "app/redux/slices/routeSlice";
import { Earth } from "./earth";
import { useInterval } from "app/hooks/useInterval";

export const Starlink = () => {
  const dispatch = useDispatch();
  const { starlinks = [], status } = useSelector(selectStarlink);

  const globeData = useRef([]);
  const [timer, setTimer] = useState(0);

  useInterval(() => {
    setTimer(timer + 1);
  }, 1000);

  useEffect(() => {
    dispatch(setRoute({ route: "Starlink" }));
    if (status !== "success") {
      dispatch(fetchStarlinkData());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (starlinks) {
      const allData = starlinks.map((starlink) => {
        const TLE0 = starlink?.spaceTrack.TLE_LINE0.substring(
          2,
          starlink?.spaceTrack.TLE_LINE0.length
        );

        const tle =
          TLE0 +
          " \n" +
          starlink?.spaceTrack.TLE_LINE1 +
          "\n" +
          starlink?.spaceTrack.TLE_LINE2;

        const globeDataObject = {
          // lat: getLatLngObj(tle).lat,
          // lng: getLatLngObj(tle).lng,
          lat: tle,
          lng: tle,
          alt: 0.9,
          radius: 0.01,
          color: "white",
          label: starlink.spaceTrack.OBJECT_NAME,
          launch: starlink.launch,
          version: starlink.version,
          velocity_kms: starlink.velocity_kms,
          height_km: starlink.height_km,
        };

        return globeDataObject;
      });

      globeData.current = allData;
    }
  }, [starlinks]);

  return (
    <Flex width="100%" height="100%" overflow="hidden" justifyContent="center">
      <Flex>
        <StyledStarlink
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariantsAnim}>
          {globeData && <Earth gData={globeData.current} />}
        </StyledStarlink>
      </Flex>
    </Flex>
  );
};

export default Starlink;

const StyledStarlink = styled(motion.div)`
  /* height: 95vh; */
`;
