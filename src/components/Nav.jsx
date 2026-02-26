import { Link } from '@mui/material';
import logo from '../assets/logo_default.png'
import { Stack } from '@mui/material';
function Nav(){
    return(
        <nav>
            <Stack direction='row'>
                <img height='64' src={logo} alt='Little Lemon logo'/>
                <Stack direction='row'>
                    <Link href="/">Home</Link>
                    <Link href="/#about">About</Link>
                    <Link href="/#menu">Menu</Link>
                    <Link href="/reservations">Reservations</Link>
                    <Link href="/order">Order online</Link>
                    <Link href="/login">Login</Link>
                </Stack>
            </Stack>
        </nav>
    )
}

export default Nav;