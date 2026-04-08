interface ButtonProps {
  label: string;
  variant?: 'primary' | 'outline' | 'white' | 'ghost';
  showArrow?: boolean;
  className?: string;
}

const Button = ({ 
  label, 
  variant = 'primary', 
  className = "" 
}: ButtonProps) => {
  
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-button transition-all duration-300 uppercase tracking-wider text-[15px]";

  const variants = {
    primary: "bg-brand-green text-white hover:bg-brand-green-light",
    outline: "border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white",
    white: "bg-white text-black hover:bg-brand-green hover:text-white",
    ghost: "bg-transparent text-current hover:opacity-70"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {label}
    </button>
  );
};

export default Button;