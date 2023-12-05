import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeWebPage from './Pages/HomeWebPage';
import Flooring from './LinkToAllJobs/Flooring';
import HomeSecurity from './LinkToAllJobs/HomeSecurity';
import HouseKeeping from './LinkToAllJobs/HouseKeeping';
import InteriorDesign from './LinkToAllJobs/InteriorDesign';
import LandScaping from './LinkToAllJobs/Landscaping';
import Mounting from './LinkToAllJobs/Mounting';
import Plumbing from './LinkToAllJobs/Plumbing';
import PoolMaint from './LinkToAllJobs/PoolMaint';
import AddJob from './LinkToAllJobs/AddJob';
import Consult from './LinkToAllJobs/Consult';





import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

 
  
   <BrowserRouter>
      <div className="App">
         <div id="page-body">
            <Routes>
               <Route path="/" element={<HomeWebPage />}/>
               <Route path="/flooring" element={<Flooring />}/>
               <Route path="/security" element={<HomeSecurity />}/>
               <Route path="/house" element={<HouseKeeping />}/>
               <Route path="/interior" element={<InteriorDesign />}/>
               <Route path="/land" element={<LandScaping />}/>
               <Route path="/Mounting" element={<Mounting />}/>
               <Route path="/Plumbing" element={<Plumbing />}/>
               <Route path="/Pool" element={<PoolMaint />}/>
               <Route path="/addJob" element={<AddJob />}/>
               <Route path="/Consult" element={<Consult />}/>
            </Routes>
         </div>
      </div>
  </BrowserRouter> 
  )
}

export default App;
