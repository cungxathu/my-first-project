import axios from "axios";
import { useEffect } from "react"

const Products = () => {
    useEffect(() => {
        // data fetching here
        axios.get('http://localhost:8000/products')
            .then(res => {
                console.log(res.data);
            })
    }, []);

    return (
        <h1>hello</h1>
    )
}

export default Products