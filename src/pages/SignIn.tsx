import { Input } from '../components/Input';
import { Button } from '../components/Button';
import {useRef} from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';
// import jwt from 'jsonwebtoken';

export function SignIn()
{
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate=useNavigate();

  async function signin() {
  try {
    console.log("BACKEND_URL =", BACKEND_URL);

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    console.log(usernameRef.current?.value);
    console.log(passwordRef.current?.value);

    const response=await axios.post(`${BACKEND_URL}/api/v1/signin`, {
      username,
      password
    });

    const jwt=response.data.token;
    localStorage.setItem("token",jwt);
    navigate("/dashboard");
    //redirect the user to dashboard 
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
          <Button onClick={signin} loading={false} variant="primary" text="SignIn" fullWidth={true}/>
        </div>
      </div>
    </div>
  );
}