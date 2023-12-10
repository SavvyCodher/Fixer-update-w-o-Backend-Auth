import Nbar from './Nbar';
import useUser from '../hooks/useUser';

const MyJobs = () => {

    const {user, isLoading} = useUser();  // is the user logged in
    return ( 
        <>


              <div><Nbar/></div>
            <h1>This is a list of all the jobs I have added</h1>
            
        </>
     );
}
 
export default MyJobs;