import { NextApiRequest, NextApiResponse} from "next" ;
import { TodoType } from "../../../types/todo";
export default( req: NextApiRequest, res: NextApiResponse) => {
    var fs = require('fs');
   if (req.method ==="GET") {
       try{
           const todosBuffer = fs.readFileSync("data/todos.json");
           const todosString = todosBuffer.toString();
           if (!todosString) {
               res.statusCode = 200;
               res.send([]);
           }
           const todos: TodoType [] = JSON.parse(todosString);
           res.statusCode = 200;
           return res.send(todos);
       }   catch (e){
           console.log(e);
           res.statusCode = 500;
           res.send(e);
       }
   }
}