const Card = ({ children }) => {
  return <div>{children}</div>;
};

const App = () => {
  return (
    <div>
      <Card>
        <h1>Title of the Card</h1>
        <p>This is some content inside the card.</p>
      </Card>
    </div>
  );
};

export default App;
