import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  size?: 'small' | 'medium' | 'large' | 'link';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}: ButtonProps) {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
