import { Button } from "./components/btn";
import GlobalStyle from "./globalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Button />
      <Button variant="outline" />
      <Button variant="text" />
      <Button startIcon="local_grocery_store" />
      <Button color="primary" />
      <Button color="danger" />
    </div>
  );
}

export default App;
