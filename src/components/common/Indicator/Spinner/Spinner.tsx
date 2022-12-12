import styled from 'styled-components';

export function Spinner() {
  return <StyledSpinner />;
}

const StyledSpinner = styled.div`
  border: 8px solid rgba(255, 255, 255, 0.1); /* Light grey */
  border-top: 8px solid orange; /* Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spinner 0.5s linear infinite;
  position: fixed;
  top: 50%;
  left: 50%;
`;
