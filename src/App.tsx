import ListGroup from "./components/ListGroup";
function App() {
  let items = ["Dhaka", "Chattrogram", "Rangpur", "Khulna"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
