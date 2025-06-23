 import React from 'react'
import To_Do_list from './components/To_do_list/To_Do_list'
import Blog_Posts from './components/Blog_post/Blog_Posts'
import Form_complete from './components/Wizard_form/Form_complete'
import { CartProvider } from './components/E_commerce_page/CartContext'
import Ecommerce from './components/E_commerce_page/Ecommerce'
 
 const App = () => {
   return (
    <section>
     <To_Do_list/>
     <Blog_Posts/>
     <Form_complete/>
     <CartProvider>
      <Ecommerce/>
     </CartProvider>
     </section>
   )
 }
 
 export default App