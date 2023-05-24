import Image from 'next/image'
import { Ingresar, Notificacion, CartShopping, EnlacexNav } from './components'

export const Navbar = () => {
    return (
        <header className='bg-[#f8f9fa]'>
            <nav className='flex items-center p-5 justify-between'>
                <div className='flex items-center gap-10 lg:gap-0 font-bold text-lg justify-between w-full lg:justify-normal lg:w-auto'>
                    <Image src="/img/logo.webp" alt='Desarrollo Global' width={200} height={45} className='hidden lg:block' />
                    <Image src="/img/logoMovil.webp" alt='Desarrollo Global' width={50} height={25} className='block lg:hidden' />
                    <EnlacexNav />
                </div>
                <div className='flex items-center gap-5'>
                    <Notificacion />
                    <CartShopping />
                    <Ingresar tipo={"desktop"} />
                </div>
            </nav>
        </header>
    )
}