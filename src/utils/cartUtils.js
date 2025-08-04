//장바구니 아이템의 유효성 검사 함수
export const validateCartItem = (item)=>{
    if(!item.id && item.id !==0) throw new Error(`제품은 구분아이디가 필요합니다. : ${item.id}`);
    if(!item.name) throw new Error(`아이템에 이름이 필요합니다. : ${item.name}`);
    if(!item.price && item.pirce !==0) throw new Error(`제품 가격이 정확하지 않습니다. : ${item.price}`);
    if(!item.quantity || item.quantity <0) throw new Error(`최소 수량이 선택되어야 합니다. : ${item.quantity}`);
    if(!item.selectedColor ) throw new Error(`색상 선택이 필요합니다. : ${item.selectedColor}`);
    if(!item.selectedSize ) throw new Error(`사이즈 선택이 필요합니다. : ${item.selectedSize}`);
}

//개별 상품의 총 가격 계산 함수
export const calculateItemTotal = (item)=>{
    const price = Number( item.discountPrice  || item.price ) || 0 ;
    return price*(item.quantity || 1) ;    
}




//장바구니 전체 상품 총 가격 계산 함수
export const calculateCartTotal = (items)=>{
    //리덕스(리듀서 전체 item호출, 계산)
    if( !Array.isArray(items)){ return 0;} //배열인 확인 함수 Array.isArray(~)
    return items.reduce((total, item)=> total + calculateCartTotal(item), 0);
    //배열 데이터 요소 하나씩마다 누적total 계산 배열 reduce 함수
}