import { colors } from "app/styles/theme/colors";
import { createGlobalStyle } from "styled-components";

const randomDegree = Math.floor(Math.random() * 366) + 1;

export const GlobalStyles = createGlobalStyle`
*, ::before, ::after {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke: 1px transparent;
	-moz-osx-font-smoothing: grayscale;
}

html,
body {
	margin: 0;
	padding: 0;
	font-size: 16px;
	font-family: 'HelveticaNeue', sans-serif !important;
    height: 100%;
    width: 100%;
	overflow-x: hidden;
	overscroll-behavior-y: none;
	color: ${colors.black.dark}
}


#root{
	//set to 100vh to prevent background bounce on mobile toolbars collapse
	height: 100vh;
	width: 100%;
}

.ReactCollapse--collapse {
  transition: height 500ms;
}

//SVGs

.blinking-light {
	@keyframes blink {
		0% {
		}

		100% {
			fill: rgba(255,255,255,0);
		}
	}

	animation: blink 2s infinite;
}

@keyframes fullRotation {
  from {
    transform: rotate(${randomDegree}deg);
  }
  to {

    transform: rotate(${randomDegree + 360}deg);
  }
}

.satellite-loading {
  animation: fullRotation 5s linear infinite;
}

.earth-loading {
  position: absolute;
  top: 25%;
  left: 25%;
  bottom: 25%;
  right: 25%;
  animation: fullRotation 45s linear infinite;
}

`;
