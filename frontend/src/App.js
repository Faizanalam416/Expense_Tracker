import React, {useState, useMemo} from 'react';
import styled from "styled-components";
import bg from './img/bg.png';
import {MainLayout} from './styles/Layouts';
import Orb from './Components/Orb/Orb';
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income';
import Expenses from './Components/Expenses/Expenses';
import Transaction from './Components/Transactions/Transactions';

function App() {
  const [active, setActive] = useState(1);


  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Transaction />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[]);

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
};

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(127, 134, 140, 0.78);
    ${'' /* background: rgba(0, 34, 77, 0.1); */}
    border: 3px solid #b2b6ba;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;