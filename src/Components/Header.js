import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faBars, faSquareXmark } from '@fortawesome/free-solid-svg-icons';
function Header(){

  const [isOpen, setIsOpen] = useState(false);    
  const [isMobile, setIsMobile] = useState(false);
  const [searchForm, setSearchForm] = useState(false);
  const [mobiletoggle, setMobiletoggle] = useState(false);

  const searchSection=()=>{
    setSearchForm(!searchForm);
}

  const toggleBtn = () => {
    setIsOpen(prev => !prev);        
  };

  const handleMobileLinkClick = () => {
    setMobiletoggle(false); 
  };
  useEffect(() => {
  const deActive = () => {
      if (window.innerWidth >= 768) {
      setMobiletoggle(false);
      setIsOpen(false);  
      }
      
      const handleResize = () => {
          setIsMobile(window.innerWidth < 768); 
      };
      handleResize(); 
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  };


  window.addEventListener("resize", deActive);
  return () => window.removeEventListener("resize", deActive);
  }, []);

  return(
    <header id="main_header">
      <div className="innerbox">
        <h1><Link to="/"><img src={`${process.env.PUBLIC_URL}}/images/logossg.png`} alt="ssglandersLogo" onClick={handleMobileLinkClick} /></Link></h1>
        <nav className="main-navbar">
          <ul>
            <li><Link to="/category/COLLABOLATION" >COLLABOLATION</Link></li>
            <li><Link to="/category/JERSEYS">JERSEYS</Link></li>
            <li><Link to="/category/CAPS">CAPS</Link></li>
            <li><Link to="/category/ETC">COLLETIBLES</Link></li>
            <li><Link to="/category/SPECIAL">SPECIAL</Link></li>
          </ul>
        </nav>
        
        {
          mobiletoggle && 
          <div className="mobile-navbar">
            <nav>
              <ul>
                <li><Link to="/category/COLLABOLATION" onClick={handleMobileLinkClick}>COLLABOLATION</Link></li>
                <li><Link to="/category/JERSEYS" onClick={handleMobileLinkClick}>JERSEYS</Link></li>
                <li><Link to="/category/CAPS" onClick={handleMobileLinkClick}>CAPS</Link></li>
                <li><Link to="/category/ETC" onClick={handleMobileLinkClick}>COLLETIBLES</Link></li>
                <li><Link to="/category/SPECIAL" onClick={handleMobileLinkClick}>SPECIAL</Link></li>
              </ul>
          </nav>
        </div>
        }
        <nav className="user-menu">
          <Link to="/login" onClick={handleMobileLinkClick}>LOGIN</Link>
          <Link onClick={()=>{setMobiletoggle(!mobiletoggle); toggleBtn()}} className="toggle_btn">
            <FontAwesomeIcon icon={faBars} />
          </Link>
          <Link onClick={()=>searchSection()}>
            <FontAwesomeIcon icon={faSearch} />
            <span className="sr-only">search</span>
          </Link>
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="sr-only">basket</span>
          </Link>
        </nav>
      </div>
      {
        searchForm &&
        <div className="search-area">
          <div className="search-box">
            <input type='text' placeholder="검색어를 입력하세요." />
            <FontAwesomeIcon icon={faSearch} className="search"  />
            <FontAwesomeIcon icon={faSquareXmark} className="close"  onClick={() => setSearchForm(false)} />
          </div>
        </div>
      }
      
    </header>
  )
}

export default Header;