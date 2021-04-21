function AddTodoForm (props){
    return(
<div>
<form>
  <div className="mb-3">
    <label htmlfor="todoTitle" className="form-label">Email address</label>
    <input type="text" className="form-control" id="todoTitle"/>
  </div>

  <div className="mb-3 form-check">
    <input type="text" className="form-check-input" id="completed"/>
    <label className="form-check-label" htmlfor="completed">Check me out</label>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
  
</form>
</div>
    );
}
export default AddTodoForm;