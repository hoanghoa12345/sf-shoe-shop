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
        urlLink:'https://o.remove.bg/downloads/50710582-cbe0-4642-8b4e-fa7a153ab64c/3117kzw-a0x-1-removebg-preview.png',
        name:'Kappa giày thể thao nam 3117KZW A0X',
        price:599000,
        total:10,
        rest:9,
        detail:''
    },{
        id: 2, 
        urlLink:'https://o.remove.bg/downloads/fed3d9ed-e108-46fd-86d1-eb6bcba05831/311685w-906_1_-removebg-preview.png',
        name:'Kappa Giày sneakers Nam 311685W 906',
        price:699000,
        total:20,
        rest:2,
        
        detail:'abcnda'
    },{
        id: 3, 
        urlLink:'https://o.remove.bg/downloads/08e06ddb-a26c-4fb3-84a5-35b53aded2b7/37152nw-a04-1-removebg-preview.png',
        name:'Kappa giày sneakers nam 37152NW A04',
        price:799000,
        total:15,
        rest:15,
       
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