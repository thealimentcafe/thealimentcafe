import { Power } from 'react-feather';
import { Link} from '@material-ui/core';
import { useHistory } from "react-router-dom";

export default function Header() {
  let history = useHistory();

  const logout = () =>{
    localStorage.clear();
    history.push("/login");
  }

  return (
    <div className="Header">
        <img src="/img/logo.svg" alt={'Logo'} className="HeaderLogo" />
        <Link onClick={logout} className="LogoutBU"><Power/> Logout</Link>
    </div>
  )
}
