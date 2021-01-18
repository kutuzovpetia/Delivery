export const getData = () => ({type: 'DATA'});
export const addItemToOrder = (item) => ({type: 'ADD_ITEM_TO_ORDER', value: item});
export const deleteItemFromOrder = (newArr) => ({type: 'DELETE_ITEM_FROM_ORDER', value: newArr});
export const totalUpdate = (total) => ({type: 'TOTAL_UPDATE', value: total});
export const Pluse = (Id, Count) => ({type: 'ON_PLUSE', id : Id, count: Count});
export const Minus = (Id, Count) => ({type: 'ON_MINUS', id : Id, count: Count});
export const SetPromo = (promo) => ({type: 'SET_PROMO', value: promo });
export const SetUser = (user) => ({type: 'SET_USER', value: user });
