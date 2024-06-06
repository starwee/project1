import request from '@/utils/request'

export const checkOrder = (mode, obj) => {
    return request.get('/checkout/order', {
        params: {
            mode,
            delivery: 10,
            CouponId: 0,
            isUsePoint: 0,
            ...obj,
        }
    })
}
export const subMitOrder = (mode, obj) => {
    return request.post('/checkout/submit', {
        mode,
        delivery: 10,
        CouponId: 0,
        isUsePoint: 0,
        ...obj,
    })
}
// 订单列表
export const getMyOrderList = (dataType, page) => {
    return request.get('/order/list', {
        params: {
            dataType,
            page // List
        }
    })
}