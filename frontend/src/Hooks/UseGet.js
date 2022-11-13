import { message } from "antd";
import { useEffect, useState } from "react";

const UseGet = ((url, initialValue) => {
    const [data,setData] = useState(initialValue);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);

    useEffect(() =>{
        async function fetchData() {
            setLoading(true);
            setError(false);

            fetch(url).then((res) =>  {
                if(res.ok){
                    console.log('all good')
                    return res.json()
                }
                else{
                    console.log('error')
                    throw new Error('There was a problem fetching that data')
                }
            })
            .then(
                (res) => {
                    console.log(res.name);
                    setData(res);
                    setLoading(false);
                }
           )
           .catch((error) =>
            message.error(error)
           );
        }
        fetchData();
    }, [url])

    return {data, isLoading, isError}
})

export default UseGet;