import { Link } from 'react-router-dom';

function CollectionWrap(){
  const collectImages = [
    {
      id:'best-all-1', 
      images:[
        '/images/1000607217412_i1_1200.jpg',
        '/images/1000607217412_i2_1200.jpg',
        '/images/1000607217412_i3_1200.jpg',
        '/images/1000607217412_i4_1200.jpg',
        '/images/1000607217412_i5_1200.jpg',
      ],
      name:'랜더스X M&N RED', 
      review:367, 
      price:139000,
      discountPrice: 139000,
      colors: ['RED'],
      sizes: ['S', 'M','L'],
      description:'/images/121000607217412_d1.png'
    },
    {
      id:'best-all-2', 
      images:[
        '/images/1000602870281_i1_1200.jpg',
        '/images/1000602870281_i2_1200.jpg',
        '/images/1000602870281_i3_1200.jpg',
        '/images/1000602870281_i4_1200.jpg',
        '/images/1000602870281_i5_1200.jpg',
      ],
      name:'랜더스X알파MA-1건메탈', 
      review:962, 
      price:289000 , 
      discountPrice: 279000,
      colors: ['GRAY'],
      sizes: ['S', 'M','L','XL','2XL'],
      description:'/images/101000602870281_d1.jpg'
    },
    {
      id:'best-all-3', 
      images:[
        '/images/1000602870285_i1_1200.jpg',
        '/images/1000602870285_i2_1200.jpg',
        '/images/1000602870285_i3_1200.jpg',
        '/images/1000602870285_i4_1200.jpg',
        '/images/1000602870285_i5_1200.jpg',          
      ],
      name:'랜더스X알파MA-1블랙', 
      review:1287, 
      price:289000 , 
      discountPrice:269000, 
      colors: ['BLACK'],
      sizes: ['S', 'M','L','XL','2XL'],
      description:'/images/101000602870285_d1.jpg'
    },
    {
      id:'best-all-4', 
      images:[
        '/images/1000607217273_i1_1200.jpg',
        '/images/1000607217273_i2_1200.jpg',
        '/images/1000607217273_i3_1200.jpg',
        '/images/1000607217273_i4_1200.jpg',
        '/images/1000607217273_i5_1200.jpg',
      ],
      name:'랜더스X M&N Cream', 
      review:49, 
      price:199000 ,
      discountPrice:199000,
      colors: ['CREAM'],
      sizes: ['S', 'M','L','XL'],
      description:'/images/121000607217273_d1.png'
    }
  ]
  return(
    <section className="collection-wrapper">
      <h2>MUSINSA ITEM</h2>
      <p>아직 경험해 보지 못한 당신을위해 준비한 기획전 아이템!</p>
      <div className="item-box">
        <div className="leftItem" >
          <img src="/images/66a1de6c10e642_45659229.jpg" alt="collection item" className="collection-left-img" />
        </div>
        <div className="rightItems">
          {
            collectImages.map((item,idx)=>(
              <Link  to={`/product/${item.id}`} state={{product:item}} key={idx}>
                <img src={item.images[0]} alt={`collection item ${idx+2}`} />
              </Link>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default CollectionWrap;