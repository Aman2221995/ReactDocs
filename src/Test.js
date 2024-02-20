import React from 'react';
import Test1 from './Test1';

const Test = () => {

    const func1 = (Test1) =>{
        console.log(Test1)
        console.log('test')
        return (
            Test1
        )
    }
  return (
    <div>
        <button onClick={()=>func1(Test1)}>Click</button>
    </div>
  )
}

export default Test;