import { ChakraProvider } from "@chakra-ui/react";
import './App.css';
import SearchJobSection from "./components/SearchJobSection";
import { AlertProvider } from "./context/alertContext";
import AlertComponent from "./components/AlertComponent";

function App() {
  
return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <SearchJobSection />
          <AlertComponent/>
        </main>
      </AlertProvider>
    </ChakraProvider>
  )
}

export default App;
