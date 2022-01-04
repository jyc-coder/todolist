import React from "react";
import styled from "styled-components";
import { TodoType } from "../types/todo";
import palette from "../styles/palette";
import { useMemo } from "react";

const Container = styled.div`
    width: 100%;
    /* 헤더 */ 
    .todo-num{
        margin-left: 12px;
    }
    .todo-list-header{ 
        padding: 12px;
        position: relative;
        border-bottom: 1px solid ${palette.gray};

        .todo-list-last-todo {
            font-size: 14px;
            margin: 0 0 8px;
            span {
                margin-left: 8px;               
            }
        }
            .todo-list-header-colors {
                display:flex;
                /* 남은 할일의 수를 색깔별로 표시할 숫자 */
                .todo-list-header-color-num {
                    display:flex;
                    margin-right:8px;
                    p{
                        font-size: 14px;
                        line-height:16px;
                        margin: 0;
                        margin-left: 6px;
                    }
                    /* 그 숫자 옆에 표시되는 동그라미 */
                    .todo-list-header-round-color{
                        width:16px;
                        height: 16px;
                        border-radius:50%
                    }
                }
            }
        }
        /* 색깔별 단축키 표시 */
        .bg-blue{
            background-color: ${palette.blue};
        }
        .bg-green {
            background-color: ${palette.green};
        }
        .bg-navy {
            background-color: ${palette.navy};
        }
        .bg-orange {
            background-color: ${palette.orange};
        }
        .bg-red {
            background-color: ${palette.red};
        }
        .bg-yellow {
            background-color: ${palette.yellow};
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
                <div className="todo-list-header-colors">
                    {Object.keys(todoColorNums).map((color, index) => (
                        <div className="todo-list-header-color-num" key={index}>
                            <div className={`todo-list-header-round-color bg-${color}`}></div>
                            <p>{todoColorNums[color]}개</p>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};



export default TodoList;