import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faAddressCard } from '@fortawesome/free-solid-svg-icons';

function Login(){
    return(
        <section className="login-wrap">
            <h2>LOGIN</h2>
            <div className='login-box'>
                <div className='input-box'>
                    <span>
                        <FontAwesomeIcon icon={faAddressCard} className="key" style={{fontSize:'20px', color:'#8b8b8bff'}} />
                    </span>
                    <input type='text' placeholder='아이디를 입력하세요.' />                
                </div>
                <div className='input-box'>
                    <span>
                        <FontAwesomeIcon icon={faKey} className="key" style={{fontSize:'20px', color:'#8b8b8bff'}} />
                    </span>
                    <input type='password' placeholder='비밀번호를 입력하세요.' />                
                </div>
                <div className='login-btn'>
                    <button>로그인</button>
                    <button>회원가입</button>
                </div>
            </div>
        </section>
    )
}
export default Login;