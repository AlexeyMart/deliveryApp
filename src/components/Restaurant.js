import React, { useState } from 'react';
import { Button } from 'antd';

export default function Restaurant({ restaurant, defaultOpen }) {
   console.log(restaurant);

   const [isOpen, setOpen] = useState(defaultOpen);

   const body = isOpen && <img src={restaurant.image} width="100px" height="100px" alt=""></img>;

   return (
      <div>
         <h3>{restaurant.name}</h3>
         {body}
         <div>
            <Button type="primary" onClick={() => setOpen(prevState => !prevState)}>
               {isOpen ? 'Close' : 'Open'}
            </Button>
         </div>
      </div>
   );
}
