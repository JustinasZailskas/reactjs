function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function Main() {
  return (
    <div>
      <Greeting name="Jonas" />
      <Greeting name="Petras" />
    </div>
  );
}
