import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["New York", "London", "Tokyo", "Paris", "LA"];
  return (
    <div>
      <ListGroup cities={cities} heading="List of cities"></ListGroup>
    </div>
  );
}
export default App;
