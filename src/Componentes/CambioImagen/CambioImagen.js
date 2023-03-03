 import React , {useState} from 'react'

 const CambioImagen = () => {
   const ANIMAL_IAMGES = {
     img1: "http://via.placeholder.com/111x111",
     img2: "http://via.placeholder.com/222x222",
     img3: "http://via.placeholder.com/333x333",
   };
   const [boton, setBoton] = useState(ANIMAL_IAMGES.img1); 
   const handleClickButton = (imagen) => {
    setBoton (ANIMAL_IAMGES[imagen])
    
   };
   return (
    <div>
      <h2>Cambio de Imagen</h2>
      <button onClick = { () => handleClickButton('img1')}>img1</button>
      <button onClick = { () => handleClickButton('img2')}>img2</button>
      <button onClick = { () => handleClickButton('img3')}>img3</button>
      <p>{boton}</p>
      <div className='imagenes'>
    <img src={boton} alt='imagen'/>
    </div>
    </div>
    
   );
}

export default CambioImagen
