import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlert] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlert(false)}>Alert</Alert>}
      <Button
        children="primary"
        color="secondary"
        Onclick={() => setAlert(true)}
      />
    </div>
  );
}

export default App;
