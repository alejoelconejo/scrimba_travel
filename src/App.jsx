import Header from "./components/Header";
import Data from "./data.js";
import Card from "./components/Card";

function App() {
  const cards = Data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}

export default App;
