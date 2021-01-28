export const getData = () => ({type: 'DATA'});                                                      // Получение даты
export const addItemToOrder = (item) => ({type: 'ADD_ITEM_TO_ORDER', value: item});                 // Добавление в корзину
export const deleteItemFromOrder = (newArr) => ({type: 'DELETE_ITEM_FROM_ORDER', value: newArr});   // Удаление из корзины
export const totalUpdate = (total) => ({type: 'TOTAL_UPDATE', value: total});                       // Задаем общую стоимость
export const Pluse = (Id, Count) => ({type: 'ON_PLUSE', id : Id, count: Count});                    // Прибавление количества
export const Minus = (Id, Count) => ({type: 'ON_MINUS', id : Id, count: Count});                    // Уменьшение количества
export const SetPromo = (promo) => ({type: 'SET_PROMO', value: promo });                            // Получение промокода
export const SetUser = (user) => ({type: 'SET_USER', value: user });                                // Получить Emаil пользователя 
export const SetComments = (data) => ({type: 'SET_COMMENTS', value: data });                        // Получение коментариев
export const clearOrder = () => ({type: 'CLEAR_ORDER'});                                            // Очищение корзины
export const showMod = () => ({type: 'SHOW_MODAL'});                                                // Показ модального окна заказа
export const showOrder = () => ({type: 'SHOW_ORDER'});                                              // Показ корзины
