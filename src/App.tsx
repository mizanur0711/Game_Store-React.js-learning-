import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button
        children="primary"
        color="secondary"
        Onclick={() => console.log("clicked")}
      />
    </div>
  );
}

export default App;
