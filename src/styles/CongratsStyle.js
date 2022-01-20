import styled from 'styled-components';

export const CongratsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem 2rem;
  border-radius: 1rem;
  /* width: 70%; */
  margin: 4em auto;
  box-shadow:
       inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3); 

  text-align: center;

  max-width: 527px;

  h1 {
    margin: 2rem 0;
  }

  p {
    font-size: 16px;
    line-height: 28px;
    color: #4a4a4a;
  }

  .close {
    color: #fff;
  }
`;
