const Person = ({ name, age, address }) => {
  return (
    <>
      <p>
        {name} {age} {address}
      </p>
    </>
  );
};
const PersonV2 = ({ data }) => {
  return (
    <>
      <p>
        {data.name} {data.age} {data.address}
      </p>
    </>
  );
};

const App = () => {
  return (
    <div>
      <Person name="Jonas" age={30} address="J. Jasinskio g. 15" />
      <PersonV2
        data={{ name: "Jonas", age: 30, address: "J. Jasinskio g. 15" }}
      />
    </div>
  );
};
