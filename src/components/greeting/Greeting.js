const Greeting = ({ message, description, count }) => {
  return (
    <div>
      <h2>{message}</h2>
      <h1>{description}</h1>
      <h3>{count}</h3>
    </div>
  );
};
export default Greeting;
