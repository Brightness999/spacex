import styled from "styled-components";
import { Box } from "app/components/common/ui";
import { colors } from "app/styles/theme/colors";
import { fontSizes, fontWeights } from "app/styles/theme/texts";
import { mediaQuery } from "app/styles/theme/breakpoints";

export const Title = styled(Box).attrs({ as: "h4" })`
  margin: 0;
  padding: 0;
  color: ${colors.gray.mediumDark};
  font-weight: ${fontWeights.normal};
  text-transform: uppercase;
  font-size: ${fontSizes.xxs};

  ${mediaQuery.md} {
    font-size: ${fontSizes.xs};
  }
`;

export const Info = styled(Box).attrs({ as: "p" })`
  margin: 0;
  padding: 0;
  font-size: ${fontSizes.xs};

  ${mediaQuery.md} {
    font-size: ${fontSizes.sm};
  }
`;
