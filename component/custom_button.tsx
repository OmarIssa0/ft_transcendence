import { TButtonProps } from "./def/T_button";

function TButton({
    title,
    className = "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full",
    style,
    onClick,
}: TButtonProps) {
    return (
        <button onClick={onClick} className={className} style={style}>
            {title}
        </button>
    );
}

export default TButton;