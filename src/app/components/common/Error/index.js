import React from "react";
import { Flex, Text } from "app/components/common/ui";
import "./animations.css";

export const Error = () => (
  <Flex
    width="200px"
    height="200px"
    position="fixed"
    top="50%"
    left="50%"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    marginLeft={{ _: "-100px", lg: "50px" }}
    marginTop="-100px"
  >
    <svg
      width="81"
      height="87"
      viewBox="0 0 81 87"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="inner-error"
        d="M40.5 16.375C32.2128 16.375 25.4707 23.0339 25.4707 31.2187C25.4707 34.7956 26.7585 38.0809 28.8999 40.6466L31.1021 35.3334C30.5348 34.0748 30.2168 32.6831 30.2168 31.2187C30.2168 25.6186 34.8298 21.0625 40.5 21.0625C46.1702 21.0625 50.7832 25.6186 50.7832 31.2187C50.7832 32.6831 50.4652 34.0747 49.8981 35.3336L52.1002 40.6466C54.2415 38.0809 55.5293 34.7956 55.5293 31.2187C55.5293 23.0339 48.7872 16.375 40.5 16.375Z"
        fill="white"
      />
      <path
        className="outer-error"
        d="M25.0265 49.992L26.9262 45.4087C23.1098 41.8458 20.7246 36.8025 20.7246 31.2188C20.7246 20.4492 29.5958 11.6875 40.5 11.6875C51.4042 11.6875 60.2754 20.4492 60.2754 31.2188C60.2754 36.8023 57.8902 41.8458 54.074 45.4086L55.9737 49.992C61.4913 45.5473 65.0215 38.783 65.0215 31.2188C65.0215 17.8645 54.0213 7 40.5 7C26.9789 7 15.9785 17.8645 15.9785 31.2188C15.9785 38.783 19.5087 45.5473 25.0265 49.992Z"
        fill="white"
      />
      <path
        d="M44.2529 34.0866C44.8749 33.2938 45.2461 32.2994 45.2461 31.2188C45.2461 28.6298 43.1213 26.5312 40.5 26.5312C37.8787 26.5312 35.7539 28.6298 35.7539 31.2188C35.7539 32.2994 36.125 33.2938 36.7471 34.0866L14.8159 87H21.9902L40.5 79.3828L59.0098 87H66.1841L44.2529 34.0866ZM46.1605 51.0625H34.8395L40.5 37.4053L46.1605 51.0625ZM41.6675 55.75L29.8365 63.1331L32.8966 55.75H41.6675ZM48.6068 56.9645L52.6367 66.6875H33.0262L48.6068 56.9645ZM40.5 74.3047L22.0611 81.8927L26.4204 71.375H54.5794L58.9387 81.8927L40.5 74.3047Z"
        fill="white"
      />
      <path
        className="lightning-error"
        d="M40 21V13H34L40 1V9H46L40 21Z"
        fill="#ff5959"
      />
      <path
        className="lightning-error"
        d="M30.8714 26.9719L23.144 24.9014L21.5911 30.6969L11.5529 21.7955L19.2803 23.8661L20.8332 18.0705L30.8714 26.9719Z"
        fill="#ff5959"
      />
      <path
        className="lightning-error"
        d="M51.0986 28.4667L57.9492 24.3352L54.8506 19.1973L68.2251 18.1379L61.3745 22.2695L64.4731 27.4074L51.0986 28.4667Z"
        fill="#ff5959"
      />
    </svg>
    <br />
    <Text color="white">Connection error!</Text>
  </Flex>
);
