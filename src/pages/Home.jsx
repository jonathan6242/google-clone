import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Search from "../components/Search"
import "./Home.css"

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header--left">
          <a href="https://google.com/about">About</a>
          <a href="https://google.com/store">Store</a>
        </div>
        <div className="home__header--right">
          <a href="https://gmail.com">Gmail</a>
          <a href="https://google.com/images">Images</a>
          <svg className="grid" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
          <div className="profile">
            <span>J</span>
          </div>
        </div>
      </div>
      <div className="home__main">
        <img className="home__logo" src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" alt="" />
        <Search />
      </div>
    </div>
  )
}
export default Home