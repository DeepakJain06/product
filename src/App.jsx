

function App() {
 
  return (
    
      <center class='todo-container'>
      <h1>ToDo List</h1>
      <div class ='todo-container'>
    <div class="row">
      <div class="col-6"><input type="text" placeholder="ToDo Enter" /></div>
      <div class="col-4"><input type="date" />
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success">ADD</button></div>
    </div>

    <div class="row">
      <div class="col-6">Buy Milk</div>
      <div class="col-4">25/06/2004
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-danger">Delete</button></div>
    </div>

    <div class="row">
      <div class="col-6">Go To College</div>
      <div class="col-4">04/12/2003
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-danger">Delete</button></div>
    </div>
      </div>
  </center>
  ); 
  
}

export default App;
