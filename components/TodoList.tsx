import React from "react";
import styled from "styled-components";
import { TodoType } from "../types/todo";
import palette from "../styles/palette";
import { useMemo } from "react";

const Container = styled.div`
    width: 100%;

    .todo-list-header{
        padding: 12px;
        border-bottom: 1px solid ${palette.gray};

        .todo-list-last-todo {
            font-size: 14px;
            span {
                margin-left: 8px;
            }
        }
    }
`;

//* TodoList가 props로 todos를 받을 수 있게 타입을 설정
interface IProps {
    todos: TodoType[];
}

const TodoList: React.FC<IProps> = ({todos}) => {
    //*객체의 문자열 인덱스 사용을 위한 타입
    type ObjectIndexType = {
        [key: string]: number | undefined;
    }
    //* 색깔 객체 구하기 
    const todoColorNums = useMemo(() => {
        const colors: ObjectIndexType = {};
        todos.forEach((todo) => {
            const value = colors[todo.color];
            if (!value) {
                //*존재하지 않던 key라면
                colors[`${todo.color}`] =1;
            } else {
                //*존재하는 키라면
                colors[`${todo.color}`] = value + 1;
            }
        });
        return colors;
    },[todos]);
    return (
        <Container>
            <div className="todo-list-header">
                <p className="todo-list-last-todo">
                    남은 TODO<span>{todos.length}개</span>
                </p>
            </div>
        </Container>
    );
};



export default TodoList;