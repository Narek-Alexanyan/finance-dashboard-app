import { ReactNode } from "react";

interface FlexProps {
  children: ReactNode;
  direction?: "row" | "col";
  justify?: "start" | "end" | "center" | "between" | "around";
  align?: "start" | "end" | "center" | "stretch";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
  gap?: string;
  className?: string;
}

const Flex = ({
  children,
  direction,
  justify,
  align,
  wrap,
  gap,
  className = "",
  ...rest
}: FlexProps) => {
  const justifyClasses = {
    start: "justify-start",
    end: "justify-end",
    center: "justify-center",
    between: "justify-between",
    around: "justify-around",
  };

  const alignClasses = {
    start: "items-start",
    end: "items-end",
    center: "items-center",
    stretch: "items-stretch",
  };

  const directionClasses = {
    row: "flex-row",
    col: "flex-col",
  };

  const wrapClasses = {
    wrap: "flex-wrap",
    nowrap: "flex-nowrap",
    "wrap-reverse": "flex-wrap-reverse",
  };

  type gapClassesType = {
    [key: string]: string;
  };

  const gapClasses: gapClassesType = {
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    5: "gap-5",
  };

  const justifyClass = justify ? justifyClasses[justify] : "";
  const alignClass = align ? alignClasses[align] : "";
  const directionClass = direction ? directionClasses[direction] : "";
  const wrapClass = wrap ? wrapClasses[wrap] : "";
  const gapClass = gap ? gapClasses[gap] : "";

  const classNames =
    `flex ${directionClass} ${justifyClass} ${alignClass} ${wrapClass} ${gapClass} ${className}`
      .split(" ")
      .filter((elem) => elem)
      .join(" ");

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

export default Flex;
