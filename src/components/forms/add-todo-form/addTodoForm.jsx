import { useState } from "react";

function AddTodoForm({ onAddTodo }) {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("form submit");
    onAddTodo({ title, completed, id: Math.random().toString() });
    setTitle("");
    setCompleted(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="todoTitle" className="form-label">
          Email address
        </label>
        <input
          type="text"
          className="form-control"
          id="todoTitle"
          required
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="completed"
          defaultChecked={completed}
          value="completed"
          onClick={({ target }) => {
            setCompleted(target.checked);
          }}
        />
        <label className="form-check-label" htmlFor="completed">
          Completed
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default AddTodoForm;
