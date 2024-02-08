import React from 'react'
import { Message } from '../components/message'
import { Button } from '../components/button'
import { useState } from 'react'
  
export const CalculatorPage = () => {
  const[count,setCount] = useState('0');
  const logic = (buttonValue)=>{
      if (buttonValue === '=') {
        const result = eval(count);
        setCount(result);
      }
        else if(buttonValue === 'CE'){
          setCount('0');
        }
      else if(buttonValue === '<-'){
        if (count.length > 1) {
          const newcount = count.slice(0, -1); 
          setCount(newcount);
        }
        else{
          setCount('0');
        }
      }
       else if(count ==='0'){
        setCount(buttonValue);
        // setCount(parseInt(count) + parseFloat(buttonValue));
      }
      else{
        setCount(count + buttonValue);
      }
    }
  const buttonRowStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  };
return (
    <div className="container" style={{ width: '400px', margin: '0 auto' }}>
      <Message  className="secondary" value = {count}/>
      <div style={buttonRowStyle}>
      <Button fn={logic} className="info" value="(" /> &nbsp;
      <Button fn={logic} className="info" value=")" /> &nbsp;
      <Button fn={logic} className="info" value="%" /> &nbsp;
      <Button fn={logic} className="info" value="CE" /> 
      </div>
      <div style={buttonRowStyle}>
      <Button fn={logic} className="light" value="7" /> &nbsp;
      <Button fn={logic} className="light" value="8" /> &nbsp;
      <Button fn={logic} className="light" value="9" /> &nbsp;
      <Button fn={logic} className="info" value="/" /> 
      </div>
      <div style={buttonRowStyle}>
      <Button fn={logic} className="light" value="4" /> &nbsp;
      <Button fn={logic} className="light" value="5" /> &nbsp;
      <Button fn={logic} className="light" value="6" /> &nbsp;
      <Button fn={logic} className="info" value="*" /> 
      </div>
      <div style={buttonRowStyle}>
      <Button fn={logic} className="light" value="1" /> &nbsp;
      <Button fn={logic} className="light" value="2" /> &nbsp;
      <Button fn={logic} className="light" value="3" /> &nbsp;
      <Button fn={logic} className="info" value="-" /> 
      </div>
      <div style={buttonRowStyle}>
      <Button fn={logic} className="light" value="0" /> &nbsp;
      <Button fn={logic} className="light" value="<-" /> &nbsp;
      <Button fn={logic} className="light" value="=" /> &nbsp;
      <Button fn={logic} className="info" value="+" /> 
      </div>
      </div>
  );
}

