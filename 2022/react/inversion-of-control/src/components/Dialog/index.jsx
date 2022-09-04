const Dialog = ({ children }) => {
  return <div style={{ width: "360px" }}>{children}</div>;
};

Dialog.Content = ({ title, description }) => {
  console.log(title, description);
  return (
    <>
      <Dialog.Title>{title}</Dialog.Title>
      <Dialog.Description>{description}</Dialog.Description>
    </>
  );
};

Dialog.Title = ({ children }) => {
  return <h2>{children}</h2>;
};

Dialog.Description = ({ children }) => {
  return <p>{children}</p>;
};

Dialog.ButtonContainer = ({ align, children }) => {
  return <div style={{ display: "flex", flexDirection: align === "vertical" ? "column" : "row" }}>{children}</div>;
};

Dialog.Button = ({ type, onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Dialog;
