function Todoitem1() {

    let todo = 'Buy milk';
    let date = '25/06/2004';

    return (<div class='container'>
        <div class="row dj-row">
        <div class="col-6">{todo}</div>
            <div class="col-3">{date}
            </div>
            <div class="col-3">
                <button type="button" class="btn btn-danger dj-button">Delete</button>
            </div>
   
              
        </div></div>
      
            
    );
}
export default Todoitem1;