import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  color: #333;
  background: #f5f5f5;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #333;
  margin-bottom: 1rem;
`;

export const TableWrapper = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  min-width: 15rem;
  position: sticky;
  top: 0;
  z-index: 1;
  color: #333;
  text-align: left;
  background: #f9f9f9;
  border-bottom: 1px solid #ddd;
  padding: 0.75rem;
`;

export const Td = styled.td`
  border-bottom: 1px solid #ddd;
  padding: 0.75rem;
  transition: background-color 0.2s;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 0.875rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
  margin-bottom: 0.75rem;
  transition: border-color 0.2s;
  &:focus {
    border-color: #5889b5;
    outline: none;
  }
`;

export const Highlight = styled.span`
  background-color: #ffeb3b;
`;

export const NoUsersFound = styled.td`
  font-size: 1.25rem;
  color: #555;
  font-weight: 600;
  text-align: center;
  background: #fff;
  padding: 1rem;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Loader = styled.div`
  width: fit-content;
  font-size: 1.5rem;
  font-weight: 600;
  padding-bottom: 3px;
  background: linear-gradient(currentColor 0 0) 0 100%/0% 3px no-repeat;
  animation: loaderAnimation 2s linear infinite;

  &::before {
    content: "Loading...";
  }

  @keyframes loaderAnimation {
    to {
      background-size: 100% 3px;
    }
  }
`;

export const ErrorMessage = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #d8000c;
  text-align: center;
  background-color: #fdd;
  border: 1px solid #d8000c;
  border-radius: 4px;
  padding: 16px;
  margin: 16px 0;
`;
