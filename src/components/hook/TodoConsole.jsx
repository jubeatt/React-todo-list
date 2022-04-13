import styled from "styled-components";
import { defaultTodoConsoleButton } from "../commonStyle";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  & > button {
    margin-right: 1em;
  }
`;

const AllButton = styled.button`
  ${defaultTodoConsoleButton}
  background-color: ${({ theme }) => theme.lightBlue};
  &:hover {
    background-color: ${({ theme }) => theme.blue};
  }
  ${({ $active, theme }) =>
    $active &&
    `
    background-color: ${theme.blue};
  `}
`;

const ActiveButton = styled.button`
  ${defaultTodoConsoleButton}
  background-color: ${({ theme }) => theme.lightOrange};
  &:hover {
    background-color: ${({ theme }) => theme.orange};
  }
  ${({ $active, theme }) =>
    $active &&
    `
    background-color: ${theme.orange};
  `}
`;
const CompletedButton = styled.button`
  ${defaultTodoConsoleButton}
  background-color: ${({ theme }) => theme.lightGreen};
  &:hover {
    background-color: ${({ theme }) => theme.green};
  }
  ${({ $active, theme }) =>
    $active &&
    `
    background-color: ${theme.green};
  `}
`;

const ClearButton = styled.button`
  ${defaultTodoConsoleButton}
  background-color: ${({ theme }) => theme.lightRed};
  &:hover {
    background-color: ${({ theme }) => theme.red};
  }
`;

export default function TodoConsole({
  handleSwitchFilter,
  handleRemoveAllTodo,
  filter,
}) {
  const handleButtonClick = (type) => {
    return () => handleSwitchFilter(type);
  };

  return (
    <Wrapper>
      <Group>
        <AllButton
          $active={filter === "all"}
          onClick={handleButtonClick("all")}
        >
          全部
        </AllButton>
        <ActiveButton
          $active={filter === "active"}
          onClick={handleButtonClick("active")}
        >
          進行中
        </ActiveButton>
        <CompletedButton
          $active={filter === "completed"}
          onClick={handleButtonClick("completed")}
        >
          已完成
        </CompletedButton>
      </Group>
      <ClearButton onClick={handleRemoveAllTodo}>清除全部</ClearButton>
    </Wrapper>
  );
}

TodoConsole.propTypes = {
  handleSwitchFilter: PropTypes.func,
  handleRemoveAllTodo: PropTypes.func,
  filter: PropTypes.string,
};
