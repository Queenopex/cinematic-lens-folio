const About = () => {
  return (
    <div className='flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12'>
        <div className='flex-shrink-0'>
          <img
            src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/915e264f-daa9-4f34-8d1a-1c20966b2cef/profile-pic-s2xejes-1762892680985.webp'
            alt='Filmmaker Profile'
            className='w-48 h-48 rounded-full object-cover shadow-lg'
          />
        </div>
        <div className='flex-grow'>
          <h1 className='text-3xl font-bold tracking-tight mb-4'>About Me</h1>
          <p className='text-muted-foreground mb-4'>
            I am a passionate filmmaker with over a decade of experience in directing, cinematography, editing, and color grading. My work is driven by a desire to tell stories that resonate and connect with audiences on an emotional level. I thrive on creative collaboration and the challenge of bringing a vision to life, from the initial concept to the final cut.
          </p>
          <p className='text-muted-foreground'>
            Throughout my career, I've had the privilege of working on a diverse range of projects, including feature films, documentaries, music videos, and commercials. My goal is always to create visually stunning and narratively compelling work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;