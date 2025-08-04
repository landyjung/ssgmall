import { Link } from "react-router-dom";

function MainBottom(){
    return(
        <section className="main_bottom">
            <div className="fullBanner">
                    <img src={`${process.env.PUBLIC_URL}/images/full_bnn.jpg`} alt="landers infielder park sung han" />                
            </div>
            <div className="content_bottom">
                <div className="bot1">
                    <h3>SSG LANDERS</h3>
                    <p>KK 슬라이더’로 달라진 이로운,<br />ERA 0점대의 비밀</p>
                </div>
                <div className="bot2">
                    <h3>Defending Champion</h3>
                    <p>'철벽 불펜’ 빈 틈이 없다, <br />승리 수호신 한 둘이 아니다</p>
                </div>
                <div className="bot3">
                    <h3>Amazing Landers</h3>
                    <p>SSG랜더스, <br /> ‘인천 홈 개막전 완벽 스타트’</p>
                </div>
            </div>
        </section>
    )
}
export default MainBottom;