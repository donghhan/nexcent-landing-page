import "./style.Button.scss";

interface ButtonProp {
  type: "primary" | "secondary" | "tertiary";
  icon?: boolean;
  text: string;
}

export default function Button({ type, icon, text }: ButtonProp) {
  return <button className={`${type}`}>{text}</button>;
}
