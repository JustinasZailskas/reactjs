import { Greeting } from "./Greeting";

export default function MainComponent() {
  const name = "Justinas";
  return (
    <>
      <Greeting />
      <h1>Welcome, {name}</h1>
    </>
  );
}
