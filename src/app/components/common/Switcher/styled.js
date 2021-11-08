import styled from "styled-components";
import { Flex } from "app/components/common/ui";
import { colors } from "app/styles/theme/colors";

export const Switch = styled(Flex).attrs({
  borderRadius: "sm",
  overflow: "hidden",
})`
  margin-bottom: 1rem;
  margin-top: 0.25rem;
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
`;
export const Item = styled(Flex).attrs({
  as: "button",
  justifyContent: "center",
  padding: "xxs",
})`
  flex-basis: ${({ itemsCount }) => (itemsCount > 1 ? "50%" : "100%")};
  cursor: pointer;
  border: none;
  background: ${({ isActive }) =>
    isActive ? colors.black.dark : colors.gray.medium};
  color: ${({ isActive }) => (isActive ? colors.white : colors.black.dark)};

  &:hover {
    background: ${({ isActive }) =>
      isActive ? colors.black.dark : colors.black.medium};
    color: ${colors.white};
  }

  &:active {
    background: ${colors.black.dark};
    color: ${colors.white};
  }
`;
