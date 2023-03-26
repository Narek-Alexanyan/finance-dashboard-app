import { ReactNode } from "react";

interface BoxProps {
  children?: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  role?: string;
  tabIndex?: number;
  ariaLabel?: string;
  ariaDescribedby?: string;
  ariaLabelledby?: string;
}

const Box = ({
  children,
  className = "",
  as = "div",
  role,
  tabIndex,
  ariaLabel,
  ariaDescribedby,
  ariaLabelledby,
}: BoxProps) => {
  const Element = as;

  const classNames = `box-border ${className}`;
  
  return (
    <Element
      className={classNames}
      role={role}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      aria-labelledby={ariaLabelledby}
    >
      {children}
    </Element>
  );
};

export default Box;
