import "./style.Layout.scss";
import Button from "../button/Button";

interface LayoutProp {
  children?: React.ReactNode;
  direction: "horizontal" | "vertical";
  title: string;
  text: string;
  buttonText: string;
  style?: React.CSSProperties;
}

export default function Layout({
  children,
  direction,
  title,
  text,
  style,
  buttonText,
}: LayoutProp) {
  return (
    <section style={style}>
      <div className={direction === "horizontal" ? "horizontal" : "vertical"}>
        <div className="text-wrapper">
          <h1 className="title">{title}</h1>
          <span className="text">{text}</span>
          {direction === "horizontal" ? (
            <Button text={buttonText} type="primary" />
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
