import { useState } from "react"
import "../../../SASS/brands/brands.css"
const Brands = () => {

    const [brands, setBrands] = useState([
        "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/09/brand_03.svg",
        "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/09/brand_04.svg",
        "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/09/brand_05.svg",
        "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/09/brand_04.svg",
        "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/09/brand_07.svg",
        "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/09/brand_08.svg"
    ])
    


    return (
        <div className="brands" >
            {brands.map((img, i) => {
                return <img key={i} title="Brand Name"  src={img} />
            })}
        </div>
    )
}

export default Brands