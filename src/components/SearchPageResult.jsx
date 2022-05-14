import { useEffect, useState } from "react"

function SearchPageResult({ url, title, snippet }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, [])

  return (
    <div className="searchpage__result">
      {
        loading ? (
          <>
            <div className="skeleton__url"></div>
            <div className="skeleton__title"></div>
            <div className="skeleton__snippet"></div>
          </>
        ) : (
          <>
            <a href={url} className="searchpage__result--url">
              {url}
            </a>
            <a href={url} className="searchpage__result--title">
              {title}
            </a>
            <div className="searchpage__result--snippet">
              {snippet}
            </div>
          </>
        )
      }
 
    </div>
  )
}
export default SearchPageResult