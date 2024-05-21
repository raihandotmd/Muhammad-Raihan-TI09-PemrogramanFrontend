const Alert = (props) => {
  const { children } = props;
  return (
    <div style={{ marginBottom: "1rem" }}>
      <span style={{ color: "red" }}>{children}</span>
    </div>
  );
};

export default Alert;
