import React from 'react';
import styled from '@emotion/styled';
import Button from '@material-ui/core/Button';
import { styled as muiStyled } from '@material-ui/system';

const MyComponent = muiStyled('div')`
  color: orange;
  background-color: aliceblue;
  padding: 8;
  border-radius: 4;
`;

const MyButton = styled.div`
  color: green;
`;

const MyButton2 = styled(Button)`
  color: red;
`;

const App: React.FC = () => {
  return (
    <>
      <h1>HEJ</h1>
      <MyButton>Styled in 3 days</MyButton>
      <MyButton2>pelle</MyButton2>
      <MyComponent>PELLELLELLE</MyComponent>
    </>
  );
};

export default App;
