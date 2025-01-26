function App() {
  const data = "Hello, Grandchild!";
  return <Parent data={data} />;
}

function Parent({ data }) {
  return <Child data={data} />;
}

function Child({ data }) {
  return <Grandchild data={data} />;
}

function Grandchild({ data }) {
  return <p>{data}</p>;
}
