import { Box } from "app/components/common/ui";
import { Button } from "app/components/common/ui/Button";
import { fontWeights } from "app/styles/theme/texts";
import styled from "styled-components";
import { zIndicies } from "app/styles/theme/zIndicies";
import { Link } from "react-router-dom";
import { colors } from "app/styles/theme/colors";

export const Wrapper = styled(Box).attrs({ as: "div" })`
  z-index: ${zIndicies.sidebar};
  height: 100%;
  background: #fff;
  position: absolute;
  right: 0;
`;

export const CloseWrapper = styled(Button)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 1rem;
  min-width: 33px;
  min-height: 21px;
`;

export const List = styled(Box).attrs({ as: "ul" })`
  list-style: none;
  margin: 0;
  margin-top: 5rem;
  padding: 0;
`;

export const ListElement = styled.li`
  padding: 0.5rem 0;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: ${fontWeights.light};
  color: ${colors.black.medium};

  &:hover {
    font-weight: ${fontWeights.normal};
  }
`;
