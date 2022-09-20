import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Button,Spinner, Input} from '@chakra-ui/react';
// import { ChakraProvider } from '@chakra-ui/react';
import DisplayJohn,{JohnProfile} from './component/DisplayJohn';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      
     <Button color = "red" size = "ig">mybutton</Button>
     <Button color = "yellow" size = "ig">mybutton</Button>
     <Button color = "green" size = "ig">mybutton</Button>

     <Spinner color = "pink"></Spinner>
     <Spinner color = "black"></Spinner>
     <Spinner color = "gray"></Spinner>
    
     <JohnProfile/>
      </ChakraProvider>
    </div>
  );
}






export default App;
