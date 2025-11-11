import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Message sent! Thank you for reaching out.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className='flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-3xl font-bold tracking-tight mb-8 text-center'>Get in Touch</h1>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div className='space-y-2'>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' placeholder='Your Name' required />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' placeholder='Your Email' required />
            </div>
          </div>
          <div className='space-y-2'>
            <Label htmlFor='subject'>Subject</Label>
            <Input id='subject' placeholder='Subject' required />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='message'>Message</Label>
            <Textarea id='message' placeholder='Your Message' rows={5} required />
          </div>
          <div className='text-center'>
            <Button type='submit'>Send Message</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;