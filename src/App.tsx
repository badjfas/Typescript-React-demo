
import * as React from "react" 
import styled from "styled-components";
import Number from "./Number";

const Container = styled.div``;
const App = () => {
  const [count,setCount] = React.useState(0);

  const add = ():void => {
    setCount(count+1)
  }
  return (
    <div className="App">
      <Number count={count} />
      <button onClick={add}></button>
    </div>
  );
}

export default App;
