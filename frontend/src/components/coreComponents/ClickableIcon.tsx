import { ReactNode } from "react";

interface ClickableIconProps {
    icon: ReactNode;
    link: string;
    label: string;
    className?: string;
}


export default function ClickableIcon({ icon, link, label, className }: ClickableIconProps) {

    return (
        <a 
            target="_blank" 
            rel="noopener noreferrer"
            href={link} 
            className={`h-fit ${className || ''}`}
            aria-label={label}
        >
            {icon}
        </a>
    );

}