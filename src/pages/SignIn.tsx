import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function SignIn()
{
  return(
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-lg min-w-48 p-8">
        <Input placeholder="Username"/>
        <Input placeholder="Password"/>

        <div className='flex justify-center rounded-md font-light pt-4'>
          <Button loading={false} variant="primary" text="SignIn" fullWidth={true}/>
        </div>
      </div>
    </div>
  );
}