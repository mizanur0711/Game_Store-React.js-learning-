interface Props {
  children: string;
  color: string;
  Onclick: () => void;
}

const Button = ({ children, color, Onclick }: Props) => {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={Onclick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
