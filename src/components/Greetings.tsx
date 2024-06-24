// Greeting.tsx

import React from 'react';
import GreetingProps from '../interfaces/GreetingProps';

/*interface GreetingProps {
    name: string;
    surname:string;
  }*/
  
  const Greeting: React.FC<GreetingProps> = ({ name,surname }) => {
    return <h1>Hello, {name} {surname}!</h1>;
  }
  
  export default Greeting;
  