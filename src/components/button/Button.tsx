import "./style.Button.scss";

interface ButtonProp {
  type: "primary" | "secondary" | "tertiary";
  icon?: boolean;
  text: string;
}

export default function Button({ type = "primary", icon, text }: ButtonProp) {
  return <button className={`${type}`}>{text}</button>;
}
