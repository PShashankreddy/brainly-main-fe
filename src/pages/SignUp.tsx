import { Input } from '../components/Input';
import { Button } from '../components/Button';
import {useRef} from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';

export function SignUp()
{
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate=useNavigate();

  async function signup() {
  try {
    console.log("BACKEND_URL =", BACKEND_URL);

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    console.log(usernameRef.current?.value);
    console.log(passwordRef.current?.value);

    await axios.post(`${BACKEND_URL}/api/v1/signup`, {
      username,
      password
    });

    navigate("/signin");

    alert("You have successfully signed up. Please sign in to continue.");
  } catch (err) {
    console.error(err);
    alert("Signup failed");
  }
}

  return(
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-lg min-w-48 p-8">
        <Input ref={usernameRef} placeholder="Username"/>
        <Input ref={passwordRef} placeholder="Password"/>

        <div className='flex justify-center rounded-md font-light pt-4'>
          <Button onClick={signup} loading={false} variant="primary" text="SignUp" fullWidth={true}/>
        </div>
      </div>
    </div>
  );
}