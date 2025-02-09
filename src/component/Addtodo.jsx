
function Addtodo() {
    return (
        <div class='todo-container'>
        <div class="row dj-row">
            <div class="col-6"><input type="text" placeholder="ToDo Enter" /></div>
            <div class="col-2"><input type="date" />
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-success dj-button">ADD</button></div>
        </div>
    </div>
     );

}

/**
 * Addtodo component
 * 
 * This component is responsible for adding a new todo item.
 * 
 * @component
 * @example
 * return (
 *   <Addtodo />
 * )
 */
export default Addtodo;