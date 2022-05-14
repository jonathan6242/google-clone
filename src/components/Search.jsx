import { useContext, useState } from "react"
import "./Search.css"
import { useNavigate } from "react-router-dom"
import GoogleContext from "../context/GoogleContext"

function Search({ value, searchpage }) {
  const [text, setText] = useState(value ? value : '')
  const navigate = useNavigate()
  const {setTerm} = useContext(GoogleContext)

  const search = (e) => {
    e.preventDefault();

    if(text.length > 0) {
      setTerm(text)
      navigate('/search')
    }
  }

  return (
    <form onSubmit={search} className="input__container">
      <i 
        className="fa-solid fa-magnifying-glass"
        style={{order: searchpage && 2, marginRight: searchpage && "8px"}}
      ></i>
      <input 
        type="text" 
        placeholder="Search Google or type a URL" 
        value={text} 
        onChange={({ target: {value} }) => {setText(value)}} />
      <i className="fa-solid fa-microphone"></i>
    </form>
  )
}
export default Search