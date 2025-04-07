import React from "react";
import Link from "next/link";

import Button, { ButtonProps } from "./Button";

interface LinkButtonProps extends ButtonProps {
  href: string;
}

const LinkButton = (props: LinkButtonProps) => {
  const { href, ...rest } = props;
  return (
    <Link href={href}>
      <Button {...rest}></Button>
    </Link>
  );
};

export default LinkButton;
