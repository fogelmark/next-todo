import "@/styles/button.css"

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

export const Button = ({ onClick, disabled, children }: ButtonProps) => {
  return (
    <button className="bg-green-200 rounded-lg py-2 button-bezel" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};