import { Power } from 'react-feather';
import { Link} from '@material-ui/core';

export default function Header() {
  return (
    <div className="Header">
          <img src="/img/logo.svg" className="HeaderLogo" />
          <Link href="/home" className="LogoutBU"><Power/> Logout</Link>
        </div>
  )
}
