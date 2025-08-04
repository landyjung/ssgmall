import {useSelector, useDispatch} from 'react-redux';
import { toggleLogin } from './memberSlice';

function MemberCard() {
    const isLoggedIn = useSelector((state)=>state.member.isLoggedIn);
    const dispatch = useDispatch();

    return (
        <div className='flex flex-col gap-10 items-center'>
            <button onClick={()=>{dispatch(toggleLogin())}} className={`w-[120px] ${ isLoggedIn ? 'bg-gray-300' : 'bg-blue-500'}`}>
                { isLoggedIn ? '로그아웃' : '로그인'}
            </button>        
            <p>
                {isLoggedIn ? '로그인 성공! 환영합니다.' : '로그인이 필요한 페이지입니다.'}
            </p>
        </div>
    )
  }  
  export default MemberCard;