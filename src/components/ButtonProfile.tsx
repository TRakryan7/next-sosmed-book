interface ButtonProfileProps {
    label: string;
    secondary?:boolean;
    fullWidth?:boolean;
    large?: boolean;
    onClick?: (event:React.ButtonHTMLAttributes<HTMLButtonElement>) => void;
    disabled?: boolean;
    smaller?:boolean;
    outline?: boolean;
}

const ButtonProfile: React.FC<ButtonProfileProps> = ({
    label,
    secondary,
    fullWidth,
    large,
    onClick,
    disabled,
    smaller,
    outline
}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`
                disabled:opacity-70
                disabled:cursor-not-allowed
                hover:opacity-80
                transition
                border-2
                border-primary
                rounded-2xl
                ${fullWidth ? 'w-full':'w-fit'}
                ${secondary ? 'bg-white' : 'bg-primary'}
                ${secondary ? 'text-primary' : 'text-white'}
                ${large ? 'text-xl' : 'text-md'}
                ${large ? 'px-5' : ''}
                ${large ? 'py-3' : ''}
                ${smaller ? 'px-2' : ''}
                ${smaller ? 'py-1' : ''}
                ${smaller ? 'text-sm' : 'text-md'}
                ${outline ? 'bg-transparent' : ''}
                ${outline ? 'border-white' : ''}
                ${outline ? 'text-white' : ''}
            `}
        >
            {label}
        </button>
    )
}

export default ButtonProfile