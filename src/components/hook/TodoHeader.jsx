import styled from "styled-components";
import { defaultTodoItemButton } from "../commonStyle";
import { useState, useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
import PropTypes from "prop-types";

const TodoHeaderWrapper = styled.div`
  margin-bottom: 30px;
`;

const TodoInputBlock = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  margin-right: 20px;
  border-radius: 4px;
  font-size: 1em;
  border: 1px solid #c7c7c7;
  padding: 8px;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  ${({ $isDarkMode, theme }) =>
    $isDarkMode &&
    `border-color: ${theme.darkModeYellow}; 
     background-color: transparent;
     color ${theme.darkModeYellow}; 
      &:focus {
        box-shadow: none;
      }
    `}
`;

const BlueButton = styled.button`
  ${defaultTodoItemButton}
  border-color: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.blue};
  &:hover {
    background-color: ${({ theme }) => theme.blue};
    color: white;
  }
  ${({ $isDarkMode, theme }) =>
    $isDarkMode &&
    `
    border-color: ${theme.darkModeYellow};
    color: ${theme.darkModeYellow};
    &:hover {
      background-color: ${theme.darkModeYellow};
      color: ${theme.darkModeBlack};
    }
  `}
`;

export default function TodoHeader({ handleAddTodo }) {
  const isDarkMode = useContext(DarkModeContext);
  const [inputValue, setInputValue] = useState("");
  const handleInput = (e) => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      handleAddTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <TodoHeaderWrapper onSubmit={handleSubmit}>
      <TodoInputBlock>
        <Input
          $isDarkMode={isDarkMode}
          value={inputValue}
          onChange={handleInput}
          placeholder="Type Somthing..."
          required
        ></Input>
        <BlueButton $isDarkMode={isDarkMode}>新增</BlueButton>
      </TodoInputBlock>
    </TodoHeaderWrapper>
  );
}

// propTypes 是小寫
TodoHeader.propTypes = {
  handleAddTodo: PropTypes.func,
};
