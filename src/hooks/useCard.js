import { useEffect } from "react";
import { useState } from "react";


const useCard = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        fetch(`https://frozen-woodland-58819.herokuapp.com/products`)
            .then(res => res.json())
            .then(result => {
                setData(result);
                setLoading(false);
            })
    }, []);
    console.log(data);
    return {
        data,
        loading
    }
};

export default useCard;