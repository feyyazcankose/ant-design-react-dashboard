import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeContext";
import "./styles/global.css";
import { MasterLayout } from "./core/layout/MasterLayout";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <MasterLayout />
      </Router>
    </ThemeProvider>
  );
}

export default App;
