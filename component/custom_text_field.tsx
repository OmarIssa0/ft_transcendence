
type Props = {
    title: string;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

function CustomTextField({ title, className, style, onClick }: Props) {
    return (
        <input
            type="text"
            placeholder={title}
            className={className}
            style={style}
            onClick={onClick}
        />
    );
}

export default CustomTextField;