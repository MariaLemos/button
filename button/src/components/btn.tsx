import styled, { css } from "styled-components";

export const Button: React.FC<{
  endIcon?: string;
  size?: "sm" | "md" | "lg";
  startIcon?: string;
  variant?: "default" | "outline" | "text";
  disableShadow?: boolean;
  color?: "default" | "primary" | "secondary" | "danger";
}> = ({
  variant = "default",
  disableShadow = false,
  size = "md",
  startIcon,
  endIcon,
  color,
}) => {
  switch (variant) {
    case "text":
      return (
        <TextButton size={size} color={color ?? "primary"} disableShadow>
          {startIcon && <span className="material-icons">{startIcon}</span>}
          Default {endIcon && <span className="material-icons">{endIcon}</span>}
        </TextButton>
      );
    case "outline":
      return (
        <OutilineButton size={size} color={color ?? "primary"} disableShadow>
          {startIcon && <span className="material-icons">{startIcon}</span>}
          Default
          {endIcon && <span className="material-icons">{endIcon}</span>}
        </OutilineButton>
      );
    default: {
      return (
        <DefaultButton size={size} color={color ?? "default"} disableShadow>
          {startIcon && <span className="material-icons">{startIcon}</span>}
          Default
          {endIcon && <span className="material-icons">{endIcon}</span>}
        </DefaultButton>
      );
    }
  }
};
const DefaultButton = styled.button<{
  size: string;
  color: string;
  disableShadow: boolean;
}>`
  --danger: #d32f2f;
  --default: #e0e0e0;
  --primary: #2962ff;
  --secondary: #455a64;
  padding: 0.5rem 1rem;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  background-color: ${({ color }) => `var(--${color})`};
  color: ${({ color }) => (color === "default" ? "#3F3F3F" : "#fff")};
  box-shadow: ${({ disableShadow }) =>
    disableShadow ? "none" : "0px 2px 3px rgba(51, 51, 51, 0.2)"};
  border-radius: 6px;
  border: none;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  span {
    font-size: 14px;
  }
  ${(props) => {
    if (props.size === "sm") {
      return css`
        padding: 6px 12px;
      `;
    }
    if (props.size === "lg") {
      return css`
        padding: 11px 22px;
      `;
    }
  }}
  &:hover,
  &:focus {
    /* filter: contrast(175%) brightness(103%); */
  }
  &:disabled {
    background: #e0e0e0;
    color: #9e9e9e;
  }
`;

const TextButton = styled(DefaultButton)`
  background-color: transparent;
  color: ${({ color }) => `var(--${color})`};
  box-shadow: none;
  &:hover,
  &:focus {
    background: rgba(41, 98, 255, 0.1);
  }
  &:disabled {
    background-color: transparent;
  }
`;
const OutilineButton = styled(TextButton)`
  border: 1px solid ${({ color }) => `var(--${color})`};
  border-radius: 6px;
`;
