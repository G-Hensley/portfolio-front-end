import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    type: "button" | "submit" | "reset";
    buttonStyle: string;
    buttonSize: string;
}

export default function Button({ children, onClick, type, buttonStyle, buttonSize }: ButtonProps) {
    return (
        <button onClick={onClick} type={type} className={`btn font-body-ff ${buttonStyle} ${buttonSize}`}>
            {children}
        </button>
    )
}