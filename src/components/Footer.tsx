const Footer = () => {
  return (
    <footer className='border-t border-border'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground'>
        <p>&copy; {new Date().getFullYear()} Sanaa Films. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;