import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-weight: 500;
  padding: 50px 0;
  img {
    display: block;
    object-fit: cover;
    width: 100%;
    max-width: 450px;
  }
  color: #d70b52;
  h1 {
    margin-top: 20px;
  }
  a {
    color: #fff;
    background-color: #d70b52;
    padding: 10px 30px;
  }
`;