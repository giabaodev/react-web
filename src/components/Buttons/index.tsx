
import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes, forwardRef } from "react";

const BtnCus = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => (
    <Button ref={ref}>
        {props.children}
    </Button>
))

const LinkCus = () => (
    <Button variant="link">

    </Button>
)

export {
    BtnCus,
    LinkCus
};
