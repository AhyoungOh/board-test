import './style.scss';

function Header({titleName}){
  return (
    <div className="header">
      <div>{titleName}</div>
    </div>
  )
}

export default Header;