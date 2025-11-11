import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex-grow'>
      <section
        className='relative h-[calc(100vh-4rem)] bg-cover bg-center flex items-center justify-center text-center text-white'
        style={{
          backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/915e264f-daa9-4f34-8d1a-1c20966b2cef/hero-background-vu6qexi-1762892610375.webp')`,
        }}
      >
        <div className='absolute inset-0 bg-black/60' />
        <div className='relative z-10 p-4'>
          <h1 className='text-4xl md:text-6xl font-bold tracking-tight mb-4'>
            Crafting Stories, Frame by Frame
          </h1>
          <p className='text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground mb-8'>
            A filmmaker, director, editor, and colorist passionate about bringing compelling narratives to life.
          </p>
          <Button asChild size='lg'>
            <Link to='/work'>Explore My Work</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;