
const Card=({children,className})=> {
    let classes = "card " + className 
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default Card
