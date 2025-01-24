import Homepage from "./components/pages/homepage";
import { ThemeProvider } from "./components/ui/theme-provider";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <ThemeProvider>
        <Homepage />
      </ThemeProvider>
      <Toaster />
    </>
  );
}

export default App;
