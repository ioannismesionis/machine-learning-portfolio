import Homepage from "./components/pages/homepage";

import { ThemeProvider } from "./components/ui/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider>
        <Homepage />
      </ThemeProvider>
    </>
  );
}

export default App;
