const projects = [
  {
    title: 'Project Alpha',
    description: 'A journey through the stars.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/915e264f-daa9-4f34-8d1a-1c20966b2cef/project-thumb-1-08wty5d-1762892618518.webp',
  },
  {
    title: 'Project Beta',
    description: 'A summer romance.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/915e264f-daa9-4f34-8d1a-1c20966b2cef/project-thumb-1-08wty5d-1762892618518.webp',
  },
  {
    title: 'Project Gamma',
    description: 'A city under siege.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/915e264f-daa9-4f34-8d1a-1c20966b2cef/project-thumb-3-e1iuato-1762892639550.webp',
  },
  {
    title: 'Project Delta',
    description: 'Whispers from the past.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/915e264f-daa9-4f34-8d1a-1c20966b2cef/project-thumb-4-oq2gtzq-1762892647671.webp',
  },
];

const Work = () => {
  return (
    <div className='flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <h1 className='text-3xl font-bold tracking-tight mb-8'>My Work</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
        {projects.map((project) => (
          <div key={project.title} className='group overflow-hidden rounded-lg shadow-lg'>
            <img
              src={project.imageUrl}
              alt={project.title}
              className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105'
            />
            <div className='p-6 bg-card'>
              <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
              <p className='text-muted-foreground'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;