import { ADD_USER, UPDATE_USER, DELETE_USER } from './Action';
import { SET_PRODUCT, SELECT_PRODUCT, REMOVE_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './Action';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './Action'

const initialStateLogin = [
    {
        token:
            localStorage.getItem('user') === null
                ? ''
                : JSON.parse(localStorage.getItem('user')).token,
        name:
            localStorage.getItem('user') === null
                ? ''
                : JSON.parse(localStorage.getItem('user')).name,
        email:
            localStorage.getItem('user') === null
                ? ''
                : JSON.parse(localStorage.getItem('user')).email,
        _id:
            localStorage.getItem('user') === null
                ? ''
                : JSON.parse(localStorage.getItem('user'))._id,
        isAdmin:
            localStorage.getItem('user') === null
                ? ''
                : JSON.parse(localStorage.getItem('user')).isAdmin

        // isAuthenticated: false
    }
]

export const authReducer = (state = initialStateLogin, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('user', localStorage.getItem('user'))
            return {
                ...state,
                token: JSON.parse(localStorage.getItem('user')).token,
                name: JSON.parse(localStorage.getItem('user')).name,
                email: JSON.parse(localStorage.getItem('user')).email,
                _id: JSON.parse(localStorage.getItem('user'))._id,
                isAdmin: JSON.parse(localStorage.getItem('user')).isAdmin
                // isAuthenticated: true
            }
        case LOGIN_FAILURE:
            localStorage.removeItem('user')
            return {
                ...state,
                token: '',
                name: '',
                email: '',
                _id: '',
                isAdmin: ''
                // isAuthenticated: false
            }
        case LOGOUT:
            localStorage.removeItem('user')
            return {
                ...state,
                token: '',
                name: '',
                email: '',
                _id: '',
                isAdmin: ''
                // isAuthenticated: false
            }
        default:
            return state
    }
}


const initialStateUser = [
    {
        id: 1,
        avatar: 'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg',
        userName: 'xyz',
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
        fullname: " Quang tuan",
        gender: 'Nam',
        email: 'abcd@gmail.com',
        phone: '012365479',
        age: '20/10/1997',
        address: "Quy nhon"
    }, {
        id: 3,
        avatar: 'https://hinhanhdephd.com/wp-content/uploads/2015/12/hinh-anh-dep-girl-xinh-hinh-nen-dep-gai-xinh.jpg',
        userName: 'mng',
        fullname: "Tran Quang ",
        gender: 'Nam',
        email: 'abcd@gmail.com',
        phone: '012365479',
        age: '20/10/1997',
        address: "Quy nhon"
    }, {
        id: 4,
        avatar: 'https://hinhanhdephd.com/wp-content/uploads/2015/12/hinh-anh-dep-girl-xinh-hinh-nen-dep-gai-xinh.jpg',
        userName: 'mng',
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
            return state.map((contact) => contact.id === action.payload.id ? action.payload : contact)
        case DELETE_USER:
            return state.filter((contact) => contact.id !== action.payload && contact)
        default:
            return state
    }


}
const initialStateProduct = {
    products: []
}
export const contactProducts = (state = initialStateProduct, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return { ...state, products: action.payload }
        case ADD_PRODUCT:
            const products = state.products.concat(action.payload);
            return { ...state, products }
        case UPDATE_PRODUCT:
            return state.map((contact) => contact.id === action.payload.id ? action.payload : contact);
        case DELETE_PRODUCT:
            return state.filter((contact) => contact.id !== action.payload && contact)
        default:
            return state;
    }
}
export const selectProducts = (state = {}, { type, payload }) => {
    switch (type) {
        case SELECT_PRODUCT:
            return { ...state, ...payload };
        case REMOVE_PRODUCT:
            return {}
        default:
            return state
    }
}