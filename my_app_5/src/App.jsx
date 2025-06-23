 import React from 'react'
import To_Do_list from './components/To_do_list/To_Do_list'
import Blog_Posts from './components/Blog_post/Blog_Posts'
import Form_complete from './components/Wizard_form/Form_complete'
 
 const App = () => {
   return (
    <section>
     <To_Do_list/>
     <Blog_Posts/>
     <Form_complete/>
     </section>
   )
 }
 
 export default App