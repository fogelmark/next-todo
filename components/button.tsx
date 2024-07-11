type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

export const Button = ({ onClick, disabled, children }: ButtonProps) => {
  return (
    <button className="border-2" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};