import { readFileSync} from "fs";
import { TodoType } from "../../types/todo";

//*투두 리스트 데이터를 불러오기
const getList = () => {
    const todosBuffer = readFileSync("data/todos.json");
    const todosString = todosBuffer.toString();
    if (!todosString) {
        return[];
    }
    const todos: TodoType[] = JSON.parse(todosString);
    return todos;
};

export default {getList};