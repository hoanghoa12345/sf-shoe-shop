import { ADD_USER, UPDATE_USER, DELETE_USER } from './Action';
import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './Action';

const initialStateUser = [
    {
        id: 1,
        avatar: 'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg',
        userName: 'abc',
        fullname: "Tran Quang Vinh",
        gender: 'Nam',
        email: 'abcd@gmail.com',
        phone: '012365479',
        age: '20/10/1997',
        address: "Quy nhon"
    }, {
        id: 2,
        avatar: 'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg',
        userName: 'abc',
        fullname: " Quang Vinh",
        gender: 'Nam',
        email: 'abcd@gmail.com',
        phone: '012365479',
        age: '20/10/1997',
        address: "Quy nhon"
    }, {
        id: 3,
        avatar: 'https://hinhanhdephd.com/wp-content/uploads/2015/12/hinh-anh-dep-girl-xinh-hinh-nen-dep-gai-xinh.jpg',
        userName: 'abc',
        fullname: "Tran Quang ",
        gender: 'Nam',
        email: 'abcd@gmail.com',
        phone: '012365479',
        age: '20/10/1997',
        address: "Quy nhon"
    },
]




export const contactReducer = (state = initialStateUser, action) => {
    switch (action.type) {
        case ADD_USER:

            return [...state, action.payload];
        case UPDATE_USER:
            return state.map((contact) => contact.id == action.payload.id ? action.payload : contact)
        case DELETE_USER:
            return state.filter((contact) => contact.id !== action.payload && contact)
        default:
            return state
    }


}
const initialStateProduct = [
    {
        id: 1, 
        image:'https://cdn.hoang-phuc.com/media/catalog/product/cache/911a4dad289f521f5a511212882e4276/3/1/3117kzw-a0x-1.jpg',
        name:'Kappa giày thể thao nam 3117KZW A0X',
        price:599000,
        total:10,
        rest:9,
        sold:9,
        detail:''
    },{
        id: 2, 
        image:'https://cdn.hoang-phuc.com/media/catalog/product/cache/911a4dad289f521f5a511212882e4276/3/1/311685w-906_1_.jpg',
        name:'Kappa Giày sneakers Nam 311685W 906',
        price:699000,
        total:20,
        rest:2,
        sold:9,
        detail:''
    },{
        id: 3, 
        image:'https://cdn.hoang-phuc.com/media/catalog/product/cache/911a4dad289f521f5a511212882e4276/3/7/37152nw-a04-1.jpg',
        name:'Kappa giày sneakers nam 37152NW A04',
        price:799000,
        total:15,
        rest:15,
        sold:9,
        detail:''
    },{
        id: 4, 
        image:'https://cdn.hoang-phuc.com/media/catalog/product/cache/911a4dad289f521f5a511212882e4276/3/7/37152nw-a04-1.jpg',
        name:'Kappa giày sneakers nam 37152NW A04',
        price:799000,
        total:15,
        rest:15,
        sold:9,
        detail:''
    },{
        id: 5, 
        image:'https://cdn.hoang-phuc.com/media/catalog/product/cache/911a4dad289f521f5a511212882e4276/3/7/37152nw-a04-1.jpg',
        name:'Kappa giày sneakers nam 37152NW A04',
        price:799000,
        total:15,
        rest:15,
        sold:9,
        detail:''
    }
]
export const contactProducts = (state = initialStateProduct, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload];
        case UPDATE_PRODUCT:
            return state.map((contact) => contact.id == action.payload.id ? action.payload : contact);
        case DELETE_PRODUCT:
            return state.filter((contact) => contact.id !== action.payload && contact)
            default:
                return state;
    }
}