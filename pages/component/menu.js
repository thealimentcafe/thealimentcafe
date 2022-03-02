import Link from 'next/link'

export default function Menu() {
  return (
    <div>
      <ul>
        <li><Link href="/login">login</Link></li>
        <li><Link href="/home">home</Link></li>
        <li><Link href="/user">user</Link></li>
        <li><Link href="/adduser">add user</Link></li>
        <li><Link href="/viewuser">view user</Link></li>
        <li><Link href="/vieworder">view order</Link></li>
        <li><Link href="/sales">sales</Link></li>
        <li><Link href="/stock">stock</Link></li>
        <li><Link href="/additem">add item</Link></li>
        <li><Link href="/menu">menu</Link></li>
        <li><Link href="/createmenu">create menu</Link></li>
        <li><Link href="/stockupdate">stock update</Link></li>
        <li><Link href="/order">order</Link></li>
        <li><Link href="/addorder">add order</Link></li>
        <li><Link href="/liveorder">live order</Link></li>
        </ul>
    </div>
  )
}
