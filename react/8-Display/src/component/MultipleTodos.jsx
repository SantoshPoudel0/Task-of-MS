import Output from "../assets/todos-list.png"

export default function MultipleTodos() {
    let todos = [
        {
            title: "Learn HTML",
            status: true
        },
        {
            title: "Learn CSS",
            status: true
        },
        {
            title: "Learn JS",
            status: true
        },
        {
            title: "Learn REACT",
            status: false
        },
        {
            title: "Learn Express",
            status: false
        },
    ]
    return (
        <>
            <h2>MultipleTodos // OUTPUT should be as image below</h2>
            <img src={Output} alt="" />
            {/* <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>Title</td>
                        <td>Status</td>
                    </tr>
                    <tr>
                        <td>Title</td>
                        <td>Status</td>
                    </tr>
                </tbody>
            </table> */}
        </>

    )
}
