import './style.scss';

function Footer({ buttonList }){
  const Buttons = buttonList.map((el) => {
    return <button style={{backgroundColor:el.color}} key={el.title}>{el.title}</button>;
  });
  return (
    <div className="footer">
      {Buttons}
    </div>
  );
}
export default Footer;