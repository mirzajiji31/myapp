import AddTodoForm from "../../components/forms/add-todo-form"
import TodoList from "../../components/list/todo-list"
function TodoHome(props){
    return(
        <div className="row">
            <h1>toodo</h1>
            <div className="col-6">
                <AddTodoForm/>

            </div>
            <div className="col-6">
            <TodoList/>
            </div>
        </div>
    );
}
export default TodoHome;