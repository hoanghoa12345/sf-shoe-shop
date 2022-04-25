import './style.scss'
import shoes_1 from '../../assets/images/slide_1.png'
import shoes_3 from '../../assets/images/slide_3.png'
import shoes_4 from '../../assets/images/slide_4.png'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { RiShareForwardFill } from 'react-icons/ri'
import { AiFillEye } from 'react-icons/ai'

function LatestProducts() {
    const data = [
        {
            id: 1,
            name: 'Nike shoes',
            urlImage: shoes_3,
            originPirce: 20,
            salePrice: 15
        },
        {
            id: 2,
            name: 'Nike shoes',
            urlImage: shoes_4,
            originPirce: 20,
            salePrice: 15
        },
        {
            id: 3,
            name: 'Nike shoes',
            urlImage: shoes_1,
            originPirce: 20,
            salePrice: 15
        },
        {
            id: 4,
            name: 'Nike shoes',
            urlImage: shoes_4,
            originPirce: 20,
            salePrice: 15
        },
        {
            id: 5,
            name: 'Nike shoes',
            urlImage: shoes_3,
            originPirce: 20,
            salePrice: 15
        },
        {
            id: 6,
            name: 'Nike shoes',
            urlImage: shoes_4,
            originPirce: 20,
            salePrice: 15
        },
        {
            id: 7,
            name: 'Nike shoes',
            urlImage: shoes_1,
            originPirce: 20,
            salePrice: 15
        },
        {
            id: 8,
            name: 'Nike shoes',
            urlImage: shoes_4,
            originPirce: 20,
            salePrice: 15
        }
    ]

    return (
        <div className="latest">
            <div className="latest__main container">
                <h2 className="heading">
                    Latest <span>Products</span>
                </h2>
                <div className="latest__list">
                    {data.map(item => (
                        <div className="latest__item" key={item.id}>
                            <img
                                src={item.urlImage}
                                className="latest__image"
                            />
                            <div className="latest__actions">
                                <div className="latest__heart">
                                    <BsFillSuitHeartFill />
                                </div>
                                <div className="latest__share">
                                    <RiShareForwardFill />
                                </div>
                                <div className="latest__eye">
                                    <AiFillEye />
                                </div>
                            </div>
                            <h4 className="latest__name">{item.name}</h4>
                            <div className="latest__price">
                                {item.salePrice > 0 ? (
                                    <>
                                        <span className="latest__price-present">
                                            ${item.salePrice}
                                        </span>
                                        <span className="latest__price-origin">
                                            ${item.originPirce}
                                        </span>
                                    </>
                                ) : (
                                    <div className="latest__price-present">
                                        ${item.originPirce}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LatestProducts
