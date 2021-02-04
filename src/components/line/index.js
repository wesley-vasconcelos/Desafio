import styled, { css } from "styled-components";
import {
  getPercentageSizeHeight,
  getPercentageSizeWidth,
  getRelativeSize,
} from "../../../utils/utils.js";

export const Line = styled.View`
  height: 1px;
  background-color: ${(g) => g.theme.color.button.caution};
  ${({ width }) =>
    width &&
    css`
      width: ${getPercentageSizeWidth(width)};
    `}
  ${({ vertical }) =>
    vertical &&
    css`
      margin: ${getPercentageSizeHeight(vertical)}px 0;
    `}
    ${({ mLeft }) =>
    mLeft &&
    css`
      margin-left: ${getPercentageSizeHeight(mLeft)};
    `}
    ${({ mBottom }) =>
    mBottom &&
    css`
      margin-bottom: ${getRelativeSize(mBottom)};
    `}
`;
