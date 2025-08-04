import 'react-tabs/style/react-tabs.css';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import { Link } from 'react-router-dom';
import { category } from '../productData';


function BestItem(){
   

  return(
    <section className='bestItem_wrap'>
        <h2>BEST ITEM</h2>
        <p>랜더스X무신사 콜라보 베스트 아이템을 만나보세요.</p>
        <Tabs>
            <TabList className="tabs">
                {   
                    // 객체 모든 속성의 키들로 배열 변환 object.keys()
                    Object.keys(category).map((category)=>(
                        <Tab key={category} className="tab_btn">{category}</Tab>
                    ))
                }
            </TabList>
            {
                Object.entries(category).map(([category,items],idx)=>(
                    <TabPanel key={category} >
                        <div className="tab_panel">
                            {
                                items.map((item, index)=>(
                                    <div key={item.id}v className='item_box'>
                                        <Link to={`/product/${item.id}`} state={{product:item}}>
                                            <span className='best_rank'>BEST<br /><b>{index+1}</b></span>
                                            <img src={item.images && item.images.length>0 ? item.images[0] : 'error-img' } alt={item.name} className='bestItem_img' />
                                            <h3 className='item_title'>{item.name}</h3>
                                            <p className='item_review'>review {item.review}</p>
                                            <p className='item_price'>
                                                {   
                                                    item.price && (
                                                    <span className='gray_text'>
                                                        &#8361;{item.price.toLocaleString()} 원 
                                                    </span>
                                                )}
                                                {   
                                                    item.discountPrice && (
                                                    <span className='red_text'>
                                                        {item.discountPrice.toLocaleString()}원
                                                    </span>
                                                )} 
                                                </p>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </TabPanel>
                ))
            }            
        </Tabs>
    </section>
  )
}

export default BestItem;