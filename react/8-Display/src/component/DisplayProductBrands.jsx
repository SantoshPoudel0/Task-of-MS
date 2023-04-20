
import Output from "../assets/product-brands.png"
export default function DisplayProductBrands() {
    let products = [
        {
            "_id": "6409aef50ddb8002d60696c5",
            "name": "laptop",
            "price": 500,
            "in_stock": 10,
            "brands": [
                "acer"
            ],
            "user": {
                "name": "John",
            }
        },
        {
            "_id": "6409aef50ddb8002d60696c4",
            "name": "S22 ultra",
            "price": 1000,
            "in_stock": 5,
            "brands": [
                "samsung"
            ],
            "user": {
                "name": "Alex",
            }
        },
        {
            "_id": "6409aef50ddb8002d60696c3",
            "name": "GA-110-1B",
            "price": 300,
            "in_stock": 20,
            "brands": [
                "gshock", "casio"

            ],
            "user": {
                "name": "John",
            }
        },

    ]
    return (
        <>
            <h2>DisplayProductBrands // Output should be as image below </h2>
            <img src={Output} alt="" srcset="" />
            {/* <div style={{ display: "flex", gap: "10px" }}>
                <div className="" style={{
                    width: "300px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    border: "1px solid gray ",
                    borderRadius: "15px ",
                    padding: "15px ",
                }}>
                    <div>
                        <h1>name</h1>
                        <h3>price</h3>
                        <p>{
                            <span className="badge" style={{
                                backgroundColor: "#3a3a40",
                                color: "white",
                                padding: "10px",
                                borderRadius: "10px",
                            }}> brand</span>

                        }</p>
                        <p>Created By: name</p>
                    </div>
                </div>
            </div> */}
        </>

    )
}
