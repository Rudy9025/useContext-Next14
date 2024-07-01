import Link from "next/link"
import { useAppContext } from "../Context"

const Navbar = () => {
    const {toggleDarkMode} =useAppContext()
  return (
   <>
   
   <nav style={{display:"flex",justifyContent:"space-around"}}>
    <h2>Navbar</h2>

<div style={{display:"flex",gap:"25px"}}>
    <Link href="/components/Contact">Contact</Link>
    <Link href="/components/Admin">Admin</Link>
    <button onClick={toggleDarkMode}>change color</button>

</div>
   </nav>
   
   </>
  )
}

export default Navbar