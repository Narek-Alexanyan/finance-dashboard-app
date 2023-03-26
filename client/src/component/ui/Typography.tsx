import { ReactNode } from "react";

interface TypographyProps {
  children?: ReactNode;
  size?: string;
  weight?: string;
  color?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  responsive?: boolean;
  breakpoints?: {
    [key: string]: string;
  };
}

const Typography = ({
  children,
  size = "text-base",
  weight = "font-normal",
  color = "text-black dark:text-white",
  variant = "p",
  responsive = false,
  breakpoints = {},
}: TypographyProps) => {
  const Tag = variant;
  const responsiveClasses = responsive
    ? Object.keys(breakpoints)
        .map((key) => `sm:${key}:${breakpoints[key]}`)
        .join(" ")
    : "";

  return (
    <Tag className={`${size} ${weight} ${color} ${responsiveClasses}`}>
      {children}
    </Tag>
  );
};

export default Typography;
