import React , {useState} from 'react' 

const ConversorDolares = () => {
    const [monto, setMonto] = useState(null);
    const Conversion = (e) => {
        let peso = e.target.value;
        let dolares = peso * 300;
        setMonto(dolares);
    };
  return (
    <div>
     <input type = 'Number' onChange={Conversion}></input>
     <h2>El valor es:{monto}</h2>
    </div>
  );

}

export default ConversorDolares