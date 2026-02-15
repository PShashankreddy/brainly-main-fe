import { Button } from '../components/Button';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { Card } from '../components/Card';
import { CreateContentModal } from '../components/CreateContentModal';
import { Sidebar } from '../components/Sidebar';
import { useState } from 'react';
import { useContent } from '../hooks/useContent';
import { BACKEND_URL } from '../config';
import axios from 'axios';

export function Dashboard() 
{
  const [modalOpen,setModalOpen]=useState(false);
  const [filterType, setFilterType] = useState<string | null>(null);
  const [refresh, setRefresh] = useState(0);

  const contents=useContent(refresh);

  // Filter contents by type
  const filteredContents = filterType 
    ? contents.filter((c: any) => c.type === filterType) 
    : contents;

  const handleShareBrain = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/brain/share`,
        { share: true },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      console.log('Share Brain response:', response.data);
      if (response.data.link) {
        const fullLink = `${BACKEND_URL}${response.data.link}`;
        navigator.clipboard.writeText(fullLink);
        alert('Brain link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing brain:', error);
      alert('Failed to share brain');
    }
  };

  return (
  <div>
    <Sidebar onFilterChange={setFilterType}/>
    <div className='p-4 ml-72 min-h-screen bg-gray-200 border border-gray-300'>
       <CreateContentModal open={modalOpen} onClose={()=>{
        setModalOpen(false);
       }}/>
 
       <div className='flex justify-between items-center pb-4'>
         <h1 className='text-3xl font-bold text-gray-800'>
           {filterType ? `${filterType.charAt(0).toUpperCase() + filterType.slice(1)}` : 'All Notes'}
         </h1>
         <div className='flex gap-4'>
           <Button onClick={()=>
             {setModalOpen(true)}} 
              variant="primary" text="Add Content" startIcon={<PlusIcon/>} />
           <Button onClick={handleShareBrain} variant="secondary" text="Share Brain" startIcon={<ShareIcon/>}/>
         </div>
       </div>
    
       <div className='pt-2 flex gap-4 flex-wrap'>
        {
          filteredContents.map(({id, type,link,title}, idx)=>(
            <Card
              key={`${type}-${link || idx}`}
              id={id}
              type={type}
              link={link}
              title={title}
              onDelete={() => setRefresh(refresh + 1)}
            />
          ))
        }
           {/* <Card  type="youtube" link="https://youtu.be/oorC8yVE1BE?si=Kjt_ybnPmgD4EO4E" title="First Video"/> */}
       </div>
    </div>

  </div>

); }

export default Dashboard
