import { Route , Routes , Navigate } from "react-router-dom";

//componet
import DetailCard from './component/DetailCard'
import Landing from "./component/Landing";
import Navbar from "./component/Navbar";
import Cards from "./component/Cards";

function App() {
  return (
   <div >
      <Navbar/>
      <Routes>
          <Route path="/card/:id" element={<DetailCard/>} />
          <Route path="/services" element={<Cards/>} />
          <Route path="/" element={<Landing/>} /> 
          <Route path="/*" element={<Navigate to='/' />}/>
      </Routes>
   </div>
  );
}

export default App;
