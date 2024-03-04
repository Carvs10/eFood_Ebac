import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "./styles";
import RoutesPages from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <RoutesPages />
      </BrowserRouter>
    </>
  );
}

export default App;
