import { StatusOk, StatusError, StatusLoading } from "./components";

function App() {
  return (
    <div>
      <StatusOk />
      <StatusLoading />
      <StatusError />
    </div>
  );
}

export default App;
