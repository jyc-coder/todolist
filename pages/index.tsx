import React from "react";
import { NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";
import Axios from "axios";
import { getTodosAPI } from "../lib/api/todo";

//* todos 예시 파일 작성
const todos: TodoType[] =[
    {id: 1, text: "알바 갔다오기", color:"red" ,checked:false},
    {id: 2, text: "마트가서 장보기", color:"orange" ,checked:false},
    {id: 3, text: "공부하기", color:"yellow", checked: true},
    {id: 4, text: "과제 제출하기", color:"green", checked:false},
    {id: 5, text: "운동하기" , color:"blue" , checked: false},
    {id: 6, text: "일찍 자기", color:"navy" , checked: false},
];
//* TodoList가 props로 todos를 받을 수 있게 타입을 설정
interface IProps {
    todos: TodoType[];
}


const app: NextPage<IProps> = ({todos}) => {
    console.log(process.env, "클라이언트");
    return <TodoList todos ={todos}> </TodoList>
}

export const getServerSideProps = async () => {
    try {
        const {data} = await getTodosAPI();
        console.log(process.env,"서버");
        return {props: {todos: data} };
    }   catch (e) {
        console.log(e);
        return {props: { todos: [] } };
    }
};

export default app;