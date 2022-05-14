function SearchPageOption({ icon, text }) {
  return (
    <div className="searchpage__option">
      {icon && icon}
      <span>{text}</span>
    </div>
  )
}
export default SearchPageOption