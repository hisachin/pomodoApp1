import "./button.css";

export function Button(props) {
  const { type, text, size, clickHandler } = props;

  return (
    <button
      className={`btn btn-${type ? type : "primary"} btn-${size ? size : "md"}`}
      onClick={clickHandler}
    >
      {text ? text : "button"}
    </button>
  );
}
