import { useEffect,useState } from "react";

function useCurrencyInfo(currency) {
    let [data,setData] = useState({})
 useEffect(()=>{
    fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json`)
    .then((res)=>res.json())
    .then((data)=>setData(data[currency]))
 },[currency])
 return data;
}

export default useCurrencyInfo
