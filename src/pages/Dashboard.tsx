import { Button } from '../components/Button';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { Card } from '../components/Card';
import { CreateContentModal } from '../components/CreateContentModal';
import { Sidebar } from '../components/Sidebar';
import { useState } from 'react';
import { useContent } from '../hooks/useContent';

export function Dashboard() 
{
  const [modalOpen,setModalOpen]=useState(false);

  const contents=useContent();

  return (
  <div>
    <Sidebar/>
    <div className='p-4 ml-72 min-h-screen bg-gray-200 border border-gray-300'>
       <CreateContentModal open={modalOpen} onClose={()=>{
        setModalOpen(false);
       }}/>
 
       <div className='flex justify-end gap-4'>
         <Button onClick={()=>
           {setModalOpen(true)}} 
            variant="primary" text="Add Content" startIcon={<PlusIcon/>} />
         <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon/>}/>
       </div>
    
       <div className='pt-2 flex gap-4 flex-wrap'>
        {
          contents.map(({type,link,title}, idx)=>(
            <Card
              key={`${type}-${link || idx}`}
              type={type}
              link={link}
              title={title}
            />
          ))
        }
           {/* <Card  type="youtube" link="https://youtu.be/oorC8yVE1BE?si=Kjt_ybnPmgD4EO4E" title="First Video"/> */}
       </div>
    </div>

  </div>

); }

export default Dashboard
