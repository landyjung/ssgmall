import { Link } from 'react-router-dom';

const specialItems = [
      {
        id:'special-1', 
        images:[
          `${process.env.PUBLIC_URL}/images/1000689938868_i1_1200.jpg`,
          `${process.env.PUBLIC_URL}/images/1000689938868_i2_1200.jpg`,
        ],
        name:'25 뉴옐로우 에디션 유니폼', 
        review:367, 
        price:125000,
        discountPrice:125000,
        colors: ['YELLOW'],
        sizes: ['ONE SIZE'], 
        description:`${process.env.PUBLIC_URL}/images/9357ee72-da7f-4e97-bef1-4c56bac62ed920250508.jpg`
      },
      {
        id:'special-2', 
        images:[
          `${process.env.PUBLIC_URL}/images/df451e6e-9fd5-4b9f-9ecd-e48537bdfd4a20250321.jpg`,
        ],
        name:'랜더스 어센틱 어웨이 유니폼', 
        review:962, 
        price:145000, 
        discountPrice:145000,
        colors: ['RED'],
        sizes: ['ONE SIZE'],
        description:`${process.env.PUBLIC_URL}/images/img_description.jpg`
      },
      {
        id:'special-3', 
        images:[
          `${process.env.PUBLIC_URL}/images/5ebf8f2e-9d56-4775-b0cc-1d24d42b011520250407.jpg`,
        ],
        name:'랜더스 어센틱 그린 유니폼', 
        review:1287, 
        price:145000, 
        discountPrice:145000,
        colors: ['GREEN'],
        sizes: ['ONE SIZE'],
        description:`${process.env.PUBLIC_URL}/images/img_description.jpg`
      },
      {
        id:'special-4', 
        images:[
          `${process.env.PUBLIC_URL}/images/27d6da75-f408-47da-880f-9ab47a125a8220250321.jpg`,
        ],
        name:'랜더스 어센틱 홈 유니폼', 
        review:49, 
        price:145000,
        discountPrice:145000,
        colors: ['WHITE'],
        sizes: ['ONE SIZE'], 
        description:`${process.env.PUBLIC_URL}/images/img_description.jpg`
      },   
    
  ]


function SpecialItem(){
    return(
        <section className='special_wrap'>
            <h2>SPECIAl ITEM</h2>
            <p>랜더스의 신제품을 만나보세요.</p>
            <div className='special_box'>
                <div className='special_top'>
                        <img src={`${process.env.PUBLIC_URL}/images/special_top.jpg`} alt="Muse:hanee's collection Go shop" className='special-top-img' />
                </div>
                <div className='special_product'>
                    <ul className='special_item'>
                        {
                            specialItems.map((item, index)=>(
                                <li key={item.id} className='item'>
                                    <Link to={`/product/${item.id}`} state={{product:item}}>
                                    <span className='item_rank'>SPECIAL <b>{index+1}</b></span>
                                        <img src={item.images && item.images.length>0 ? item.images[0] : 'error img'} alt={item.name} />
                                        <h3 className='item_title'>{item.name}</h3>
                                        <p className='item_review'>{item.review}</p>
                                        <div className='item_price'>
                                            {   
                                                item.price && (
                                                <span className='gray_text'>
                                                    &#8361;{item.price ? item.price.toLocaleString() : 'Price not available'} 원 
                                                </span>
                                            )}
                                            {   
                                                item.discountPrice && (
                                                <span className='red_text'>
                                                    {item.discountPrice.toLocaleString()}원
                                                </span>
                                            )}
                                        </div>                                        
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SpecialItem;