import { useState, useEffect, useCallback, useMemo} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cartSlice';
import { calculateItemTotal, validateCartItem } from '../utils/cartUtils';
import { useSpring, animated, useTransition } from 'react-spring';
import { Link } from 'react-router-dom';

function CartItem({item, onRemove, onQuqntityChange}){
    const [{x, opacity}, set] = useSpring(()=>({x:0, opacity:1}))

    const handleRemove = useCallback(()=>{
        set({x:100, opacity:0});
        setTimeout(()=>{ onRemove(item.id)}, 300 )
    },[ set,onRemove, item.id ])

    const handleQuantityChange = useCallback((newQuantity)=>{
        if( newQuantity>=1 && newQuantity<=99){
            validateCartItem({...item, quantity:newQuantity})
            onQuqntityChange(item.id, newQuantity);  //부모 컴포넌트의 수량 변경 함수 호출
        }
    }, [item, onQuqntityChange]);

    const price = useMemo(()=> Number(item.discountPrice || item.price) || 0, [item]);
    const total = useMemo(()=> calculateItemTotal(item) || 0, [item]);

    return(
        <animated.tr className="cart-item"  
            style={{transform:x.to(x=>`translate3d(${x}px, 0, 0),`),
                    opacity:opacity.to(o=>o), }}>
            <td className="thumb">
                <img src={item.images} alt={item.name}/>
            </td>
            <td className="product-info">
                <strong>{item.name}</strong>
                <span>[옵션 : {item.selectedColor}, {item.selectedSize}]</span>
            </td>
            <td className="quantity">
            <button className="minus" onClick={()=>{handleQuantityChange(item.quantity-1)}}> - </button>
                <input type="number" value={item.quantity} min="1" max="99" onChange={(e)=>{handleQuantityChange(e.target.value)}} />
                <button className="plus" onClick={()=>{handleQuantityChange(item.quantity+1)}}> + </button>
            </td>
            <td className="price">{price.toLocaleString()}</td>
            <td className="total">{total.toLocaleString()}</td>
            <td className="del-button">
                <button className="remove" onClick={handleRemove}>삭제</button>
            </td>
        </animated.tr>
    )
}

function CartPage(){
    const dispatch = useDispatch();
    const cartItems = useSelector(state=> state.cart.items) || [];
    const [ showTotal, setShowTotal ] = useState(false);

    const handleRemove = useCallback((productId)=>{
        dispatch(removeFromCart(productId))
    },[dispatch]);

    const handleQuantityChange = useCallback((productId, newQuantity)=>{
        dispatch(updateQuantity({productId, quantity:newQuantity}));        
    },[dispatch]);

    const totalAmount = useMemo(()=>{
        if( !cartItems || cartItems.length===0 ) return 0;
        return cartItems.reduce((total, item)=>{
            const itemTotal = calculateItemTotal(item);
            return total + (itemTotal || 0)
        },0)
    }, [cartItems])

    /* 초기상태, 시작상태;최종상태, 고유식별 */
    const transitions =useTransition( cartItems,{
        from:{ opacity:0, transform: 'translate3d(100%, 0, 0'},
        enter:{ opacity:1, transform: 'translate3d(0%, 0, 0)'},
        leave:{opacity :0, transform: 'translate3d(-50%, 0, 0)' },
        keys:item => item.id
    })
    const totalAnimation = useSpring({
        opacity:showTotal ? 1:0,
        transform:showTotal ? 'translateY(0)':'translateY(50px)'
    })
    useEffect(()=>{
        const timer = setTimeout(()=> setShowTotal(true),500);
        return ()=> clearTimeout(timer);
    },[])

    
    if( !cartItems || cartItems.length ===0 ){
        return(
            <div className="empty-cart">
                <h2>CART</h2>
                <p>장바구니가 비어 있습니다.</p>
                <div>
                    <Link to="/" className='home-btn'>쇼핑하러 가기</Link>
                </div>
            </div>
        )
    }

    return(
        <div id="cart-wrap">
            <div id="container">
                <div id="contents">
                    <div className='titleArea'>
                        <h2>CART</h2>
                    </div>
                    <div className='basket'>
                        <table   summary="" className="order-element">
                            <thead>
                                <tr>
                                    <th scope="col">상품이미지</th>
                                    <th scope="col">상품정보</th>
                                    <th scope="col">수량</th>
                                    <th scope="col">판매가</th>
                                    <th scope="col">합계</th>
                                    <th scope="col">선택</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    transitions((style,item)=>(
                                        <CartItem key={item.id}
                                            item={item}
                                            onRemove = {handleRemove}
                                            onQuqntityChange={handleQuantityChange}
                                        />  
                                    ))
                                }
                            </tbody>
                        </table>
                        <animated.div style={totalAnimation} className=""></animated.div>
                        <table className='total-info'>
                            <thead>
                                <tr>
                                    <th scope="col"><strong>총 상품금액</strong></th>
                                    <th scope="col">총 배송비</th>
                                    <th scope="col">결제예정금액</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>{totalAmount.toLocaleString()}원</strong></td>
                                    <td><strong>+원</strong><span>무료</span></td>
                                    <td><strong>{totalAmount.toLocaleString()}원</strong></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div className='total-order'>
                        <button onClick={()=>{}} className='btnSubmit'>전체상품 주문</button>
                        <button onClick={()=>{}} className='btnEm'>선택상품 주문</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage;