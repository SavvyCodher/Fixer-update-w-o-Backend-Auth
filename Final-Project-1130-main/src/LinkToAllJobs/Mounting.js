import Navbar from "../Pages/Navbar";
import './Mounting.css'


const Mounting = () => {

  const handleClick = () => {
    
    //redirect to add a job form//
    console.log("Take me to the flooring form");
  }

  const handleClickAgain = () => {
    console.log("consult");
  }
   return(
<>
       <nav className="bg-black navbar-dark py-3">
     <div className="col-sm fs-5  pt-2  navbar-brand fs-2 ps-5"> 
       <div className=" justify-content-center">
         <img src="https://i.postimg.cc/wBf3kxrr/Final-Logo-2.png" width="200" height="120" alt="Logo"></img>
     </div>
   </div>
   <div className="row"/>
     <div className="btn toolbar align-items-center"> <Navbar /></div>
     </nav>
     
 
        <div className="container fs-2 p-3 fw-bold text-center">
        Mounting Services</div>
  

   
       <div className="col-sm col p-4 fs-2">
         <p>IndyFIXER allows experienced individuals in mounting to offer their expertise to help serve the public in need of lawn services.  We are well qualified to meet your needs and deliver 100% satisfaction.  With our job right guarantee you can schedule with confidence and know that our job isn't done until it meets the customer standards. </p>
       </div>

         <div className="container align-items-center">
    <div className="container row bg-white-subtle p-4 justify-content-around">
    <div className="col-sm col">  
       <div className="card h-100" style={{width: 225}}>
       <img src="https://i.postimg.cc/zB1SFtGT/061-A4059-scaled.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
         <div className="card-body border primary">
         <h5 className="card-title">Garage Storage Mounting</h5>
     </div> </div></div>
     <div className="col-sm col"> 
         <div className="card h-100" style={{width: 225}}>
         <img src="https://i.postimg.cc/m2xzzzhF/c60477-7a7635e3c830447a96c532fcfd9810de-mv2.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
         <div className="card-body border primary">
         <h5 className="card-title">TV Mounting</h5>
     </div> </div></div>
     <div className="col-sm col"> 
         <div className="card h-100" style={{width: 225}}>
         <img src="https://i.postimg.cc/mkNhQj6p/Designsby-Donnie-Donnie-Galli-FY22-Summer-Ceiling-Beam-Header2.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
         <div className="card-body border primary">
         <h5 className="card-title">Beam Mounting/Installation</h5>
     </div> </div></div>
     <div className="col-sm col"> 
         <div className="card h-100" style={{width: 225}}>
         <img src="https://i.postimg.cc/J4yfg0QK/apartmenttherapy.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
         <div className="card-body border primary">
         <h5 className="card-title">Artwork Mounting</h5>
     </div> </div></div>
     <div className="col-sm col"> 
         <div className="card h-100" style={{width: 225}}>
         <img src="https://i.postimg.cc/J4GvTcYk/image.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
         <div className="card-body border primary">
         <h5 className="card-title">Update</h5>
     </div> </div></div>
  <div className="card-footer  text-muted">
  <h5 className="card-title">
            <a href="/AddJob" className="btn btn-primary mt-3" onClick={handleClick}>Post A Job Request</a>
            <a href="/Consult" className="btn btn-primary mt-3"onClick={handleClickAgain}>Request Consultation</a>
            </h5>
            </div>
            </div>
            </div>
      <p className="col-sm col p-4 fs-2">
           If you have any questions or would like ideas before you create a job, please request an online consultation to ensure we can handle your request in the most efficient way to meet your needs.  If you are ready to schedule click the add a job tab above and someone will contact you.
         </p>
    

       <div className="col-sm fs-5 fs-2">           
    <footer className="bg-black text-white text-center position-relative">
        <p className="lead pb-3">Copyright &copy; 2023 IndyFIXER</p>
        <div  className="position-absolute bottom-0 end-0">
    </div>
</footer>
       </div>

     
   

  
     
     </>
   )
 }
 
 export default Mounting;
         
        
    
           