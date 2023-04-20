import Output from "../assets/products-by-category.png"

export default function DisplayProductByCategory() {

    let products = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ];

    return (
        <>
            <h2>DisplayProducts BY CATEGORY // Output should be as image below </h2>
            <img src={Output} alt="" srcset="" />
            {/* TODO: CODE HERE */}
            {/* <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>In-Stock</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>name</td>
                        <td>price</td>
                        <td>stocked</td>
                    </tr>
                </tbody>
            </table> */}
        </>
    )
}
