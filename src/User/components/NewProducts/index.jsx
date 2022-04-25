import { AiFillStar } from 'react-icons/ai'
import shoes_1 from '../../assets/images/slide_1.png'
import shoes_2 from '../../assets/images/slide_2.png'
import shoes_3 from '../../assets/images/slide_3.png'
import './style.scss'

function NewProduct() {

    const data = [
        {
            id: 1,
            name: 'New Nike Airmac shoes',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum eveniet ipsa nobis earum, assumenda recusandae blanditiis suscipit, quo, maxime vero aliquam adipisci quis accusamus expedita at nisi animi reprehenderit!",
            urlImage: [
                shoes_1,
                shoes_1,
                shoes_1,
                shoes_1,
            ],
            originPirce: 20,
            salePrice: 15
        },
        {
            id: 2,
            name: 'New Nike Airmac shoes',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum eveniet ipsa nobis earum, assumenda recusandae blanditiis suscipit, quo, maxime vero aliquam adipisci quis accusamus expedita at nisi animi reprehenderit!",
            urlImage: [
                shoes_2,
                shoes_2,
                shoes_2,
                shoes_2,
            ],
            originPirce: 20,
            salePrice: 15
        },
        {
            id: 3,
            name: 'New Nike Airmac shoes',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum eveniet ipsa nobis earum, assumenda recusandae blanditiis suscipit, quo, maxime vero aliquam adipisci quis accusamus expedita at nisi animi reprehenderit!",
            urlImage: [
                shoes_3,
                shoes_3,
                shoes_3,
                shoes_3,
            ],
            originPirce: 20,
            salePrice: 15
        } 
    ]

    return ( 
        <div className="new">
            <div className="new__main container">
                <h2 className="heading">New <span>Product</span></h2>
                <div className="new__list">
                    {
                        data.map((item, index) => (
                            <div className="new__item" key={index}>
                                <div className="new__images">
                                    {
                                        item.urlImage.map((img, index) => (
                                            <div className="new__images-item" key={index}>
                                                <img src={img} alt='image'/>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="new__image">
                                    <img src={item.urlImage[0]} alt='image' />
                                </div>
                                <div className="new__content">
                                    <h3 className="new__name">{item.name}</h3>
                                    <div className="new__stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                    <p className='new__desc'>{item.description}</p>
                                    <div className="new__price">
                                        { 
                                            item.salePrice > 0 ? (
                                                <>
                                                    <span className="new__price-present">${item.salePrice}</span>
                                                    <span className="new__price-origin">${item.originPirce}</span>
                                                </>
                                            ) : ( 
                                                <div className="new__price-present">${item.originPirce}</div>
                                            )
                                        }
                                    </div>
                                    <button className="new__button">Add to cart</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
     );
}

export default NewProduct;