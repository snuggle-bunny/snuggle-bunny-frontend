import styled from "styled-components";

export const StyledSizeButton = styled.div<any>`
  padding: 5px;
  font-weight: ${({ selected }) => (selected ? "900" : "100")};
  text-align: center;
  width: 25%;
  border: 1px solid black;
  text-transform: uppercase;
  background: ${({ selected }) => (selected ? "black" : "white")};
  color: ${({ selected }) => (selected ? "white" : "black")};

  &:hover {
    color: white;
    background: ${({ selected }) => (selected ? "black" : "#ddbfdf")};
    cursor: pointer;
  }
`;
