import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "./styles";
import RoutesPages from "./routes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <RoutesPages />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
