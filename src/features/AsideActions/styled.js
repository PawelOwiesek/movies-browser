import styled from "styled-components";
import { ReactComponent as spinnerIcon } from "./Loading/spinner.svg";
import { ReactComponent as image } from "../AsideActions/NotFound/Picture.svg";

export const Spinner = styled(spinnerIcon)`
  display: block;
  margin: 0 auto;
  margin-top: 120px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 75px;
    height: 75px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 35px;
    height: 35px;
  }
`;

export const Image = styled(image)`
  background-color: ${({ theme }) => theme.color.whisper};
  align-self: center;
`;
export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  align-self: flex-start;
  margin-top: 56px;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.3;
  }
`;
