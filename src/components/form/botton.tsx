interface ButtonProps {
    label: string;
    secondary?:boolean;
    fullWidth?:boolean;
    large?: boolean;
    onClick?: (event:React.ButtonHTMLAttributes<HTMLButtonElement>) => void;
    disabled?: boolean;
    smaller?:boolean;
    outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
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
                ${fullWidth ? 'w-full':'w-fit'}
                ${secondary ? 'bg-white' : 'bg-primary'}
                ${secondary ? 'text-primary' : 'text-white'}
                ${secondary ? 'border-none' : 'border-primary'}
                ${large ? 'text-xl' : 'text-md'}
                ${large ? 'px-5' : 'px-4'}
                ${large ? 'py-3' : 'py-2'}
                ${smaller ? 'px-2' : 'px-4'}
                ${smaller ? 'py-1' : 'py-2'}
                ${smaller ? 'text-sm' : 'text-md'}
                ${smaller ? 'rounded-md' : 'rounded-2xl'}
                ${outline ? 'bg-transparent' : ''}
                ${outline ? 'border-white' : ''}
                ${outline ? 'text-white' : ''}
            `}
        >
            {label}
        </button>
    )
}

export default Button