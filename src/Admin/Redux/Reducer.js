import { ADD_USER,UPDATE_USER,DELETE_USER } from './Action';
import { ADD_PRODUCT,UPDATE_PRODUCT,DELETE_PRODUCT } from './Action';
 
const initialState =[
    {
        id:1,
        avatar:'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg',
        fullname:"Tran Quang Vinh",
        date:'20/10/1997',
        gender:'Nam',
        address:"Quy nhon"
    },   {
        id:2,
        avatar:'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg',
        fullname:"Tran Quang Vinh",
        date:'20/10/1997',
        gender:'Nam',
        address:"Quy nhon"
    },   {
        id:3,
        avatar:'https://hinhanhdephd.com/wp-content/uploads/2015/12/hinh-anh-dep-girl-xinh-hinh-nen-dep-gai-xinh.jpg',
        fullname:"Tran Quang Vinh",
        date:'20/10/1997',
        gender:'Nam',
        address:"Quy nhon"
    },   {
        id:4,
        avatar:'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg',
        fullname:"Tran Quang Vinh",
        date:'20/10/1997',
        gender:'Nam',
        address:"Quy nhon"
    },    {
        id:5,
        avatar:'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg',
        fullname:"Tran Quang Vinh",
        date:'20/10/1997',
        gender:'Nam',
        address:"Quy nhon"
    },   {
        id:6,
        avatar:'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg',
        fullname:"Tran Quang Vinh",
        date:'20/10/1997',
        gender:'Nam',
        address:"Quy nhon"
    },   {
        id:7,
        avatar:'https://hinhanhdephd.com/wp-content/uploads/2015/12/hinh-anh-dep-girl-xinh-hinh-nen-dep-gai-xinh.jpg',
        fullname:"Tran Quang Vinh",
        date:'20/10/1997',
        gender:'Nam',
        address:"Quy nhon"
    },   {
        id:8,
        avatar:'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg',
        fullname:"Tran Quang Vinh",
        date:'20/10/1997',
        gender:'Nam',
        address:"Quy nhon"
    },    {
        id:9,
        avatar:'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg',
        fullname:"Tran Quang Vinh",
        date:'20/10/1997',
        gender:'Nam',
        address:"Quy nhon"
    },  
]

export const contactReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_USER:
            return[...state,action.payload]
        default:
            return state
    }
}