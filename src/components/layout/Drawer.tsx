yar
const Drawer = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState('');

  const clickHandler = () => {
    setIsOpen(!isOpen);

    setTimeout(() => {
      setHide('z-n1');
    }, 1000);
  };

  const fullPage = isOpen ? 'fixed h-screen w-full z-20' : hide;

  return (
    <>
      <div className="btn btn-primary" onClick={clickHandler}>
        open menu
      </div>
      <div className={`rounded-lg drawer drawer-end fixed h-screen w-full ${fullPage} `}>
        <input id="my-drawer" type="checkbox" onChange={() => console.log("")} className="drawer-toggle" checked={isOpen}/>
        <div className="drawer-side">
          <label form="my-drawer" className="drawer-overlay" onClick={clickHandler}></label>
          <ul className='p-6 pt-16 overflow-y-auto w-80 bg-base-100 flex-col '>
            <button type="submit" className="btn">Button</button>
          </ul>
        </div>
      </div>
    </>
  );

}

export default Drawer;
