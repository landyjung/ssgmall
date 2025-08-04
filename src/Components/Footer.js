import { Link } from "react-router-dom";


function Footer(){

    const footerMenu = [
        {
            title:'MY ACCOUNT',
            links:[
                { name : 'Sign In', url:'/Sign In'},
                { name : 'Register', url:'/Register'},
                { name : 'Mypage', url:'/Mypage'},
                { name : 'Order Status', url:'/Order-Status'},
            ]
        },
        {
            title:'HELP&SUPPORT',
            links:[
                { name : 'Ordering', url:'/Ordering'},
                { name : 'Shipping', url:'/Shipping'},
                { name : 'Returns', url:'/Returns'},
                { name : 'Sizing', url:'/Sizing'},
            ]
        },
        {
            title:'ABOUT US',
            links:[
                { name : 'Our story', url:'/Our-story'},
                { name : 'Offline shop', url:'/Offline-shop'},
                { name : 'Investors', url:'/Investors'},
                { name : 'Recruit', url:'/Recruit'},
            ]
        },
        {
            title:'DESIGN',
            links:[
                { name : 'Fabric', url:'/Fabric'},
                { name : 'Technology', url:'/Technology'},
                { name : 'Competitiveness', url:'/Competitiveness'},
                { name : 'Product Care', url:'/Product-Care'},
            ]
        }
    ]
  return(
    <footer id="main_footer">
        <div className="footer_top">
            <div className="innerbox">
                <h3>GLOBAL SITE</h3>
                <ul>
                    <li><Link to="/cn"><img src="/images/site_cn.gif" alt="cn" /></Link></li>
                    <li><Link to="/en"><img src="/images/site_en.gif" alt="en" /></Link></li>
                    <li><Link to="/jp"><img src="/images/site_jp.gif" alt="jp" /></Link></li>
                </ul>
            </div>
        </div>
        <div className="footer_menu">
            <div className="innerbox">
                <ul className="footer_content">
                    {
                        footerMenu.map((list, index)=>(
                            <li key={index}>
                                <h3 >{list.title}</h3>
                                <ul>
                                {
                                    list.links.map((sublist, subindex)=>(
                                        <li key={subindex}><Link to={sublist.url} style={{ textDecoration: "none", color:"#555"}}>{sublist.name}</Link></li>
                                    ))
                                }
                                </ul>
                            </li>
                        ))
                    }            
                </ul>
            </div>
        </div>
        <div className="footer_bottom">
            <div className="innerbox">
                <address>
                    <p>통신판매업신고번호 : 제2019-인천연수구-1167호 </p>
                    <p>사업자등록번호 : 105-86-39463 전자우편 : jplove486@hanmail.net</p>
                    <p>상호 : 주식회사 형지엘리트 대표자 : 최준호 </p>
                    <p>주소 : 인천광역시 연수구 하모니로177번길 49 (형지글로벌 패션복합센터) 업무동 10층</p>
                    <p>&copy; Copyright 2022 ⓒ <span>SSG Landers Baseball</span> Club. All Right Reserved.</p>
                </address>
                <ul>
                    <li><Link to="/privacy-policy" style={{ textDecoration: "none", color:"#555"}}>개인정보처리방침</Link></li>
                    <li><Link to="/privacy-policy" style={{ textDecoration: "none", color:"#555"}}>이용안내</Link></li>
                    <li><Link to="/privacy-policy" style={{ textDecoration: "none", color:"#555"}}>이용약관</Link></li>
                </ul>
            </div>
        </div>        
    </footer>
  )
}

export default Footer;