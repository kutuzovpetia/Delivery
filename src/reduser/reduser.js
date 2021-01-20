
const initialState = {

    promocode: null,
    order: [],
    total: 0,
    accountLogin: false,
    user: '',
    carouselItem : [
      {
        title: 'БИГ СЕТ',
        img: 'https://firebasestorage.googleapis.com/v0/b/delivery-5fd13.appspot.com/o/carouselItems%2Fbig_SEt.png?alt=media&token=34b47570-d9e3-49d9-9817-f737f1b50264',
        desc: 'АМАДЕЙ 2.0 / ГРАФ 3.0 / МИХЕИЛ 3.0 / ТРИ КАРТОФЕЛЬ ФРИ / КЕТЧУП / МЕДОВО-ГОРЬЧИЧНЫЙ / ОСТРЫЙ СОУС / 1565г',
      },
      {
        title: 'ДУО СЕТ',
        img: 'https://firebasestorage.googleapis.com/v0/b/delivery-5fd13.appspot.com/o/carouselItems%2Fduo_set.png?alt=media&token=6a2d49c7-4056-4876-8b92-8949771e059c',
        desc: 'ФЭТБОЙ 2.0 МЕНЮ ДЛЯ НЕГО / СЕТ НАГОЯ ДЛЯ НЕЕ / 990г',
      },
      {
        title: 'ХЮГЕ СЕТ',
        img: 'https://firebasestorage.googleapis.com/v0/b/delivery-5fd13.appspot.com/o/carouselItems%2Fhuge_set.png?alt=media&token=0f4f8f48-229d-4f02-b17a-24ea1a069dad',
        desc: 'ФЭТБОЙ 2.0 / ВЕЙДЕР / ТРАМП / КОНГ / ДВА КАРТОФЕЛЯ ФРИ / ДВА ПО-ДЕРЕВЕНСКИ / СОУСЫ: ОСТРЫЙ / BBQ / ЧЕДДЕР / МЕДОВО-ГОРЬЧИЧНЫЙ / 1900г',
      },
    ],
    comments: [],
}

const reducer = (state = initialState, action) =>{

    switch (action.type) {
        case 'DATA':
          return  state.data
        case 'ADD_ITEM_TO_ORDER':
          return  {...state, order:[...state.order, action.value].reverse()}
        case 'TOTAL_UPDATE':
          return  { ...state, total: action.value }
        case 'DELETE_ITEM_FROM_ORDER':
          return { ...state, order : action.value }
        case 'ON_PLUSE':
          return {...state, order: state.order.map(item => {
            if(item.id === action.id){
              return {...item, count : action.count}
            }
            return item;
          }) }
        case 'ON_MINUS':
            return {...state, order: state.order.map(item => {
              if(item.id === action.id){
                return {...item, count : action.count}
              }
              return item;
          }) }  
        case 'SET_PROMO':
          return {...state, promocode : action.value}
        case 'SET_USER':
          return {...state, user : action.value}
        case 'SET_COMMENTS':
          return{...state, comments : action.value}
        default:
          return state;
      }
}

export default reducer;