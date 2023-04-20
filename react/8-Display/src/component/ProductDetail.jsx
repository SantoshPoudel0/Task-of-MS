import Output from "../assets/product-detail.png"

export default function ProductDetail() {

    let product_detail = {
        name: "laptop",
        price: 200,
        description: "Equipped with a powerful Intel Core i7 processor and 16GB of RAM, the XYZ Laptop can handle even the most demanding applications and multitasking scenarios with ease. The 512GB solid-state drive ensures lightning-fast boot and load times, while providing ample storage for all your files and media.",
        image: "https://images.unsplash.com/photo-1575024357670-2b5164f470c3"
    }

    return (
        <>
            <h2>Product Detail //  Output should be as image below</h2>
            <img src={Output} />
            {/* Code here  */}
            {/* <div className="" style={{
                width: "300px",
                marginLeft: "auto",
                marginRight: "auto",
                border: "1px solid gray ",
                borderRadius: "15px ",
                padding: "15px ",
            }}>
                <div>
                    <img src={"url"} style={{ maxWidth: "100%" }} />
                    <h1>Name</h1>
                    <h3>$PRICE</h3>
                    <p>DESCRIPTION</p>
                </div>
            </div> */}
        </>
    )
}
