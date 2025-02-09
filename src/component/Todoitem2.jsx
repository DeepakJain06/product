function Todoitem2() {
    let todo = 'Go To College';
    let date = '04/12/2003';
    return (<div class='container'>
        
        <div class="row dj-row">
            <div class="col-5">{todo}</div>
            <div class="col-4">{date}
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-danger dj-button">Delete</button></div>
        </div>
</div>

    );
}

export default Todoitem2;