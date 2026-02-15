import { Button } from './components/Button';
import { PlusIcon } from './icons/PlusIcon';
import { ShareIcon } from './icons/ShareIcon';
import { Card } from './components/Card';
import { CreateContentModal } from './components/CreateContentModal';

function App() 
{
  return <div className="p-4">
    <CreateContentModal open={true}/>

    <div className='flex justify-end gap-4'>
       <Button variant="primary" text="Add Content" startIcon={<PlusIcon/>} />
       <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon/>}/>
    </div>
    
    <div className='flex gap-4'>
       <Card  type="twitter" link="https://x.com/CineChitraalu/status/2022552623044513997?s=20" title="First Tweet"/>
       <Card  type="youtube" link="https://youtu.be/oorC8yVE1BE?si=Kjt_ybnPmgD4EO4E" title="First Video"/>
    </div>
  </div>
}
 

export default App
