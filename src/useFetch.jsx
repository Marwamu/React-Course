import { useState, useEffect } from "react";

const UseFetch = (url) =>{
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then((res) => {
              if (!res.ok) {
                throw Error("could not fetch the data from that resources");
              }
              return res.json();
            })
            .then((data) => {
              setData(data);
              setIsPending(false);
              setError(null);
            })
            .catch((err) => {
              setIsPending(false);
              setError(err.message);
    
            });
        }, 1000);
        return ()=> console.log('clean up')
      }, []);

      return {data, isPending, error}
    
}



export default UseFetch