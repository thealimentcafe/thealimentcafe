import  { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Home() {
  let history = useHistory();
  const userDet = localStorage.getItem("userDet");
 
  useEffect(() => {
    if(userDet){
      history.push('/dashboard');
    }else{
      history.push('/login');
    }
  });

  return (
    <div className="PageBody">

        Home
    </div>
  )
}


export default Home;
