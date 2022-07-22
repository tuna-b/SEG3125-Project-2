import React, { useState } from 'react';
import ObtainAllGames from './ObtainAllGames';
import OffCanvas from './OffCanvas';


const Store = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
    <div>
        <OffCanvas></OffCanvas>
        <ObtainAllGames></ObtainAllGames>
    </div>
    
    
  );
}
 
export default Store;