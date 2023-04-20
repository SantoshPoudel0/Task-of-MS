import Output from "../assets/todo-display.png"

export default function SingleTodoDetail() {
    let title = "Learn REACT";
    let status = false
    let deadline = "2023-01-01"

    return (
        <div>
            <h2>Show Single Todo // output should be as image below</h2>
            <img src={Output} alt="" />
            {/* TODO: code here */}

            {/* <p>Todo-Item</p>
            <p>Title:title</p>
            <p>Status:status</p>
            <p>deadline:deadline</p> */}


        </div>
    )
}
