import { Power } from 'react-feather';
import { Link} from '@material-ui/core';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  const logout = () =>{
    localStorage.clear();
    router.push('/login');
  }

  return (
    <div className="Header">
          <img src="/img/logo.svg" className="HeaderLogo" />
          <Link onClick={logout} className="LogoutBU"><Power/> Logout</Link>
        </div>
  )
}
