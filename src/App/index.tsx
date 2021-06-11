import React, { useState } from 'react';

/* STYLES */
import {
  Container,
  Text,
  InputSize,
  Submit
} from './styles';

/* MODULES */
declare const event: any;

const App: React.FC = () => {

  const [size, setSize] = useState<number>(2);
  const [arrayString, setArrayString] = useState<string>('');

  function handleCalc(){
    event?.preventDefault();
    /* VERIFICA N */
    if(size < 2 || size > 10) window.alert('Considere: 2 <= n <= 10');

    /* SEPARA POR VIRGULA */
    let array: string[] = arrayString.split(',');

    /* ORDENA */
    array.sort();

    /* VERIFICA ITENS DO ARRAY */
    for(let i = 0; i < array.length; i++){
      const cleanNumber: number = Number(array[i].trim());
      if(cleanNumber < -100000000 || cleanNumber > 100000000){
        window.alert('Considere: -10⁸ <= v[i] <= 10⁸')
        return
      }
    }

    /* MENORES */
    let menores: string = '';
    let soma: number = 0;
    for(let min = 0; min < size -1; min++){
      menores += `| ${array[min]}`;
      soma += Number(array[min]);
    }
    window.alert(`Os menores sao: ${menores} [soma = ${soma}]`);

    /* MAIORES */
    let maiores: string = '';
    let somaMaior = 0;
    for(let max = array.length - 1; max > array.length - size - 1; max--){
      maiores += `| ${array[max]}`;
      somaMaior += Number(array[max]);
    }
    window.alert(`Os maiores sao: ${maiores} [soma = ${somaMaior}]`);
  }

  return (
    <Container onSubmit={handleCalc}>
      <Text>digite o número de <b>n</b> [Considere: 2 {'<='} n {'<='} 10]</Text>
      <InputSize 
        value={size} 
        type="number"
        min={2}
        max={10}
        onChange={e => setSize(Number(e.target.value))}
      />
      <Text>prrencha o <b>array</b> separado por vírgula [Considere: -10⁸ {'<='} v[i] {'<='} 10⁸]</Text>
      <InputSize 
        value={arrayString} 
        type="text"
        onChange={e => setArrayString(e.target.value)}
      />
      <Submit type="submit" >Calcular</Submit>
    </Container>
  );
}

export default App;
