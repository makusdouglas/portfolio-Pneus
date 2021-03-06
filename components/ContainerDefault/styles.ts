import styled, {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";

export type ContainerBaseProps = {
  bg?: "primary" | "secondary";
  height?: number;
  isPixel?: boolean;
  styleMasterContainer?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  styleInnerContainer?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
};

export const Container = styled.div<ContainerBaseProps>`
  background-color: ${(props) =>
    props.bg
      ? props.bg === "primary"
        ? props.theme.color.bgPrimary
        : props.theme.color.bgSecondary
      : props.theme.color.bgPrimary};
  width: 100%;
  ${(props) => (props.styleMasterContainer ? props.styleMasterContainer : "")}
`;

export const InnerContainer = styled.div<ContainerBaseProps>`
  background-color: ${(props) =>
    props.bg
      ? props.bg === "primary"
        ? props.theme.color.bgPrimary
        : props.theme.color.bgSecondary
      : props.theme.color.bgPrimary};

  color: ${(props) => props.theme.color.text};
  width: 100%;
  margin: 0;
  max-width: 1280px;
  min-width: 440px;
  margin: 0 auto;
  min-height: ${(props) =>
    props.height
      ? props.isPixel
        ? `${props.height}px`
        : `${props.height}vh`
      : "100vh"};

  display: flex;
  flex-direction: column;
  position: relative;

  ${(props) => (props.styleInnerContainer ? props.styleInnerContainer : "")}
`;
