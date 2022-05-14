import { useEffect, useState } from "react";

const { REACT_APP_API_URL: API_URL , REACT_APP_CONTEXT_URL: CONTEXT_URL } = process.env;


function useGoogleSearch(term) {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      fetch(`https://www.googleapis.com/customsearch/v1?key=${API_URL}&cx=${CONTEXT_URL}&q=${term}`)
        .then(res => res.json())
        .then(data => {
          setData(data)
        }) 
    }
    if(term.length > 0) {
      fetchData()
    }
  }, [term])

  return {data}
}
export default useGoogleSearch