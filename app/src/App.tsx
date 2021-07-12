import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

//#region Estilos
const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: blueviolet;
`;
const StyledTablero = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
`;
const StyledColumna = styled.div<{
  bColor?: string;
  columna: string;
}>`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100%;
  background-color: ${(props) => props.bColor || 'unset'};
  grid-column: ${(props) => props.columna || 'unset'};
  align-items: center;
  justify-content: center;
`;
const animateHeigth = keyframes`
  from{
    height: 0;
  }
  to{
    height: 200px;
  }
`;
const StyledTarjeta = styled.div<{
  expanded?: boolean;
}>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 300px;
  min-height: ${(props) => (props.expanded ? '300px' : '100px')};
  max-height: 200px;
  background-color: white;
  border-radius: 5px;
  align-content: flex-start;
  animation: ${animateHeigth} 0.3s;
  transition: height 0.3s;
  transition: all 0.3s ease-in-out;
`;
const StyledRenglon = styled.div<{
  bColor?: string;
}>`
  display: flex;
  width: 100%;
  height: 20px;
  background-color: ${(props) => props.bColor || 'unset'};
`;
const animateOpacity = keyframes`
  from {
        opacity:0;
    }
  to {
        opacity:1;
  }
`;
const StyledExtra = styled.div<{
  show?: boolean;
}>`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  opacity: ${(props) => (props.show ? '1' : '0')};
  height: 200px;
  width: 100%;
  background-color: #92c7c7;
  animation: ${animateOpacity} 1s;
`;
//#endregion

const App = () => {
  const [expanded, setExpanded] = useState(false);
  const [showExtra, setShowExtra] = useState(false);

  useEffect(() => {
    const showRetarded = async () => {
      await new Promise((resolve: any) => setTimeout(resolve, 300));
      setShowExtra(expanded);
    };
    if (expanded) showRetarded();
    if (!expanded) setShowExtra(expanded);
  }, [expanded]);

  return (
    <StyledContainer>
      <StyledTablero>
        <StyledColumna bColor="red" columna="1">
          <StyledTarjeta expanded={expanded}>
            <StyledRenglon bColor="black" />
            <StyledRenglon bColor="black" />
            <StyledRenglon bColor="black" />
            <StyledRenglon bColor="black" />
            <StyledRenglon bColor="yellow">
              <button onClick={() => setExpanded(!expanded)} />
            </StyledRenglon>
            {expanded && (
              <StyledExtra show={showExtra}>
                <img alt="" src="https://picsum.photos/300/200" />
              </StyledExtra>
            )}
          </StyledTarjeta>
          <StyledTarjeta expanded={expanded}>
            <StyledRenglon bColor="black" />
            <StyledRenglon bColor="black" />
            <StyledRenglon bColor="black" />
            <StyledRenglon bColor="black" />
            <StyledRenglon bColor="yellow">
              <button onClick={() => setExpanded(!expanded)} />
            </StyledRenglon>
            {expanded && (
              <StyledExtra show={showExtra}>
                <img alt="" src="https://picsum.photos/300/200" />
              </StyledExtra>
            )}
          </StyledTarjeta>
          <StyledTarjeta expanded={expanded}>
            <StyledRenglon bColor="black" />
            <StyledRenglon bColor="black" />
            <StyledRenglon bColor="black" />
            <StyledRenglon bColor="black" />
            <StyledRenglon bColor="yellow">
              <button onClick={() => setExpanded(!expanded)} />
            </StyledRenglon>
            {expanded && (
              <StyledExtra show={showExtra}>
                <img alt="" src="https://picsum.photos/300/200" />
              </StyledExtra>
            )}
          </StyledTarjeta>
        </StyledColumna>
        <StyledColumna bColor="blue" columna="2">
          <StyledTarjeta expanded={expanded}>
            <StyledRenglon bColor="black" />
            <StyledRenglon bColor="black" />
            <StyledRenglon bColor="black" />
            <StyledRenglon bColor="black" />
            <StyledRenglon bColor="yellow">
              <button onClick={() => setExpanded(!expanded)} />
            </StyledRenglon>
            {expanded && (
              <StyledExtra show={showExtra}>
                <img alt="" src="https://picsum.photos/300/200" />
              </StyledExtra>
            )}
          </StyledTarjeta>
          <StyledTarjeta expanded={expanded}>
            <StyledRenglon bColor="black" />
            <StyledRenglon bColor="black" />
            <StyledRenglon bColor="black" />
            <StyledRenglon bColor="black" />
            <StyledRenglon bColor="yellow">
              <button onClick={() => setExpanded(!expanded)} />
            </StyledRenglon>
            {expanded && (
              <StyledExtra show={showExtra}>
                <img alt="" src="https://picsum.photos/300/200" />
              </StyledExtra>
            )}
          </StyledTarjeta>
          <StyledTarjeta expanded={expanded}>
            <StyledRenglon bColor="black" />
            <StyledRenglon bColor="black" />
            <StyledRenglon bColor="black" />
            <StyledRenglon bColor="black" />
            <StyledRenglon bColor="yellow">
              <button onClick={() => setExpanded(!expanded)} />
            </StyledRenglon>
            {expanded && (
              <StyledExtra show={showExtra}>
                <img alt="" src="https://picsum.photos/300/200" />
              </StyledExtra>
            )}
          </StyledTarjeta>
        </StyledColumna>
        <StyledColumna bColor="black" columna="3">
          <StyledTarjeta></StyledTarjeta>
        </StyledColumna>
      </StyledTablero>
    </StyledContainer>
  );
};

export default App;
