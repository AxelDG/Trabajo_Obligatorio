import React , {useState} from 'react'

const SuperficieRectangulo = () => {
  const [rectangulo, setRectangulo] = useState({
    base: null,
    altura: null
  });
  const [area, setArea] = useState(null);

  const valorBase =(e) =>{
    setRectangulo({
      ...rectangulo,
      base: e.target.value
    });
  }
  const valorAltura =(e) =>{
    setRectangulo({
      ...rectangulo,
      altura: e.target.value
    })
  }
  
  const calcularArea =() =>{
    let area = rectangulo.base * rectangulo.altura
    setArea(area);
  }
  return (
    <div>
      <h2>Ingrese el valor de Base:</h2>
      <input type="text" onChange={valorBase} placeholder='Base' />
      <h2>Ingrese el valor de Altura:</h2>
      <input type="text" onChange={valorAltura} placeholder='Altura' />
      <button onClick={calcularArea}>Calcular</button>
      <h2>Area: {area}</h2>
    </div>
  )
}

export default SuperficieRectangulo