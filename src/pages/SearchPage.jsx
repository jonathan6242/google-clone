import { useContext, useEffect, useState } from "react"
import GoogleContext from "../context/GoogleContext"
import useGoogleSearch from "../useGoogleSearch"
import { response } from "../response"
import Search from "../components/Search"
import "./SearchPage.css"
import { Link } from "react-router-dom"
import SearchPageOption from "../components/SearchPageOption"
import SearchPageResult from "../components/SearchPageResult"
import SearchPageStats from "../components/SearchPageStats"

function SearchPage() {
  const { term } = useContext(GoogleContext)
  // LIVE API CALL
  // const { data } = useGoogleSearch(term)
  const data = response;
  // useEffect(() => {
  //   if(data) {
  //     console.log(data)
  //   }
  // }, [data])

  return (
    <div className="searchpage">
      <div className="searchpage__header">
          <Link to='/'>
            <figure className="searchpage__logo--wrapper">
              <img className="searchpage__logo" src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" alt="" />
            </figure>
          </Link>
          <div className="searchpage__main">
            <div className="searchpage__main--top">
              <Search value={term} searchpage />
              <div className="searchpage__main--options">
                <i className="fa-solid fa-gear"></i>
                <svg className="grid" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
                <div className="profile">
                  <span>J</span>
                </div>
              </div>
            </div>
            <div className="searchpage__main--bottom">
              <SearchPageOption
                icon={<i className="fa-solid fa-magnifying-glass"></i>}
                text="All"
              />
              <SearchPageOption
                icon={<i className="fa-solid fa-newspaper"></i>}
                text="News"
              />
              <SearchPageOption
                icon={<i className="fa-solid fa-image"></i>}
                text="Images"
              />
              <SearchPageOption
                icon={<i className="fa-solid fa-video"></i>}
                text="Videos"
              />
              <SearchPageOption
                icon={<i className="fa-solid fa-location-dot"></i>}
                text="Maps"
              />
              <SearchPageOption
                icon={<i className="fa-solid fa-ellipsis-vertical"></i>}
                text="More"
              />
            </div>
          </div>
        
      </div>
      <div className="searchpage__results">
        {
          data && (
            <>
              <SearchPageStats
                results={data.searchInformation.formattedTotalResults}
                time={data.searchInformation.formattedSearchTime}
              />
              {
                data.items.map(item => (
                    <SearchPageResult
                      url={item.formattedUrl}
                      title={item.title}
                      snippet={item.snippet}
                      key={item.formattedUrl}
                    />
                  ))
              }
            </>
          )
        }
      </div>
    </div>
  )
}
export default SearchPage