 
import USe_hook from './USe_hook'
import Actions from './Actions';
import Use_form_status_hook from './Use_form_status_hook';
import Home from './Home';
import Posts from './Posts';
import Form from './Form';
import { useState, useTransition } from 'react';

 
 export const App = () => {

  const [activeTab,setActivetabs]=useState("home");
  const [isPending,stateTransition]=useTransition();
  const renderContent=()=>{
    switch (activeTab) {
      case 'home':
        return <Home/>
        case 'posts':
          return <Posts/>
          case 'form':
            return <Form/>
    
      default:
        return <Home/>;
        break;
    }
  }

    const handle_tabChange=(tabs)=>{
      stateTransition(()=>{
        setActivetabs(tabs);
      })

    }
   return (
    //  <Suspense>
    //   <USe_hook/>
    //  </Suspense>
    // <div className='p-4 grid gap-4'>
    //   {/* {/* <Actions/>
    //   <Use_form_status_hook/> */}
    //   {jobs.map(job=><Job_Card key={job.id} job={job}></Job_Card>)} */}
      
    // </div>

    <div className='tabs'>
      <button onClick={()=>handle_tabChange('home')}>Home</button>
      <button onClick={()=>handle_tabChange('posts')}>Posts</button>
      <button onClick={()=>handle_tabChange('form')}>Form</button>
      {isPending?<p>Loading...</p>:<h1>Loaded</h1>}
       <div className='content'>{renderContent()}</div>
    </div>
   );
 }
 