import { ADD_USER, UPDATE_USER, DELETE_USER } from './Action';
import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './Action';

const initialState = [
    {
        id: 1,
        avatar: 'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg',
        username:'abc',
        fullname: "Tran Quang Vinh",
        gender: 'Nam',
        email:'abcd@gmail.com',
        phone:'012365479',
        age: '20/10/1997',
        address: "Quy nhon"
    }, {
        id: 2,
        avatar: 'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg',
        username:'abc',
        fullname: " Quang Vinh",
        gender: 'Nam',
        email:'abcd@gmail.com',
        phone:'012365479',
        age: '20/10/1997',
        address: "Quy nhon"
    }, {
        id: 3,
        avatar: 'https://hinhanhdephd.com/wp-content/uploads/2015/12/hinh-anh-dep-girl-xinh-hinh-nen-dep-gai-xinh.jpg',
        username:'abc',
        fullname: "Tran Quang ",
        gender: 'Nam',
        email:'abcd@gmail.com',
        phone:'012365479',
        age: '20/10/1997',
        address: "Quy nhon"
    },{
        id: 4,
        avatar: 'https://hinhanhdephd.com/wp-content/uploads/2015/12/hinh-anh-dep-girl-xinh-hinh-nen-dep-gai-xinh.jpg',
        username:'abc',
        fullname: "Tran Quang ",
        gender: 'Nam',
        email:'abcd@gmail.com',
        phone:'012365479',
        age: '20/10/1997',
        address: "Quy nhon"
    },  {
        id: 5,
        avatar: 'https://hinhanhdephd.com/wp-content/uploads/2015/12/hinh-anh-dep-girl-xinh-hinh-nen-dep-gai-xinh.jpg',
        username:'abc',
        fullname: "Tran Quang ",
        gender: 'Nam',
        email:'abcd@gmail.com',
        phone:'012365479',
        age: '20/10/1997',
        address: "Quy nhon"
    },  {
        id: 6,
        avatar: '',
        username:'abc',
        fullname: "Tran Quang ",
        gender: 'Nam',
        email:'abcd@gmail.com',
        phone:'012365479',
        age: '20/10/1997',
        address: "Quy nhon"
    },{
        id: 7,
        avatar: 'https://hinhanhdephd.com/wp-content/uploads/2015/12/hinh-anh-dep-girl-xinh-hinh-nen-dep-gai-xinh.jpg',
        username:'abc',
        fullname: "Tran Quang ",
        gender: 'Nam',
        email:'abcd@gmail.com',
        phone:'012365479',
        age: '20/10/1997',
        address: "Quy nhon"
    },{
        id: 8,
        avatar: 'https://hinhanhdephd.com/wp-content/uploads/2015/12/hinh-anh-dep-girl-xinh-hinh-nen-dep-gai-xinh.jpg',
        username:'abc',
        fullname: "Tran Quang ",
        gender: 'Nam',
        email:'abcd@gmail.com',
        phone:'012365479',
        age: '20/10/1997',
        address: "Quy nhon"
    },
]




export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
  
            return [...state, action.payload ];
        case UPDATE_USER:
            return state.map((contact) => contact.id == action.payload.id ? action.payload : contact)
        case DELETE_USER:
            return state.filter((contact) => contact.id !== action.payload && contact)
        default:
            return state
    }
   

}