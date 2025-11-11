import { NavLink } from 'react-router-dom';
import { Film } from 'lucide-react';

const Header = () => {
  return (
    <header className='bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16'>
        <NavLink to='/' className='flex items-center gap-2 text-xl font-bold'>
          <Film className='h-6 w-6 text-primary' />
          <span>Sanaa Films</span>
        </NavLink>
        <nav className='hidden md:flex gap-6'>
          <NavLink to='/' className={({ isActive }) => `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
            Home
          </NavLink>
          <NavLink to='/work' className={({ isActive }) => `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
            Work
          </NavLink>
          <NavLink to='/about' className={({ isActive }) => `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
            About
          </NavLink>
          <NavLink to='/contact' className={({ isActive }) => `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;