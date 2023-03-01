import React , {useState} from 'react' 

const Grados = () => {
  const [grados, setGrados] = useState(null);
  const ConversionGrados = (e) => {
    let gradosCentigrados = e.target.value;
    let gradosFahrenheit = (gradosCentigrados*9/5) + 32;
      setGrados(gradosFahrenheit);
    };
  return (
    <div>
     <input type = 'Number' onChange={ConversionGrados}></input>
     <h2>El resultado es:{grados}</h2>
    </div>
  );

}

export default Grados