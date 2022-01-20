import styled from 'styled-components';

export const Form = styled.form`
  h1 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: -0.02em;
  }

  > div + div {
    margin-top: 1rem;
  }

  p {
    color: rgba(103, 103, 103, 1);
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.04em;
  }

  label {
    display: inline-block;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.04em;
    margin-bottom: 0.5rem;
    color: rgba(103, 103, 103, 1);
  }
  input[type='text'],
  textarea {
    width: 100%;
    background: #fefefe;
    border: 1px solid #eaeaea;
    box-sizing: border-box;
    border-radius: 8px;
    display: block;
    padding: 1rem;
    font-family: inherit;
    
  }
  img{
    position:absolute;
    top:138px;
    right:480px;
    width:20px;
    height:20px;

    /* margin-left:90%; 
    display: flex; */
  }
  input[type='text']:focus,
  textarea:focus {
    border: 1px solid #ff5c00;
    outline: none;
  }
`;

export const StoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  border-radius: 1rem;
  padding: 2rem 0.35rem;
  width: 40%;
  margin: 2rem auto;
  box-shadow:
       inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
  
`;

// input#search {
//   background-image: url('https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png');
//   background-size:contain;
//   background-repeat: no-repeat;
//   text-indent: 20px;
//   /* Extra Styling */
//   padding: 5px 3px;
//   transition:0.3s;
// }
// input#search:focus {
//   background-image:none;
//   text-indent:0px
// }

export const StoryName = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const CustomerVendor = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  label + label {
    margin-left: 10px;
  }

  label input {
    margin-right: 15px;
  }
`;

export const Error = styled.div`
  color: red;
  text-align: center;
`;
