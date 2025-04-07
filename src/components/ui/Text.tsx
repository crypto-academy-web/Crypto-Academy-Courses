import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ComponentAs = "h1" | "h2" | "p";

interface Props {
  children?: React.ReactNode;
  className?: string;
  as?: ComponentAs;
  onclick?: React.MouseEventHandler;
  Style?: React.CSSProperties;
  dangerouslySetInnerHTML?: { __html: string }; // Add this prop
}

const Text = forwardRef<HTMLHeadingElement | HTMLParagraphElement, Props>(
  (props, ref) => {
    const { children, className, as, onclick, Style, dangerouslySetInnerHTML } =
      props;

    if (dangerouslySetInnerHTML) {
      // If dangerouslySetInnerHTML is passed, render using this
      return (
        <p
          ref={ref}
          className={cn(
            "font-helvetica text-primary text-[18px] font-normal leading-6",
            className
          )}
          onClick={onclick}
          style={Style}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML} // Use this here
        />
      );
    }

    if (as === "h1") {
      return (
        <h1
          ref={ref}
          className={cn(
            "font-helvetica text-white text-[52px] mob:text-[40px] font-bold leading-[54px] mob:leading-[45px]",
            className
          )}
          onClick={onclick}
          style={Style}
        >
          {children}
        </h1>
      );
    }

    if (as === "h2") {
      return (
        <h2
          ref={ref}
          className={cn(
            "font-helvetica text-primary text-[36px] font-bold leading-[100%]",
            className
          )}
          onClick={onclick}
        >
          {children}
        </h2>
      );
    }

    return (
      <p
        ref={ref}
        className={cn(
          "font-helvetica text-primary text-[18px] font-normal leading-6",
          className
        )}
        onClick={onclick}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = "Text";

export default Text;
