import { useEffect, useState } from "react"

function SearchPageStats({ results, time }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 300)
  })

  return (
    <>
      {
        loading ? (
          <div className="skeleton__stats"></div>
        ) : (
          <div className="searchpage__results--stats">
            About {results} results ({time}) seconds
          </div>
        )
      }
    </>
  )
}
export default SearchPageStats