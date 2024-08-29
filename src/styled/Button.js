import styled from "styled-components";

export const Button=styled.button`
    color: white;
    padding: 10px 18px;
    min-width: 220px;
    border: none;
  
    background-color: #000000;
    border-radius: 5px;
    font-size: 20px;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    cursor: pointer;

    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        font-size: 20px;
        transition: 0.3s background ease-in;
    }
`
export const OutlineButton=styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
     &:hover{
        background-color: black;
        border: 1px solid transparent;
        color: white;
       
    }
`