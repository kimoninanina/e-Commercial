import request from '@/plugins/axios.js'

/**
 * 封面图 Banners
 */
export const IBanners = (params) => {
    return request.get({ url: '/api/v1/banners', params }, async (res) => {
        return res
    })
}

/**
 * 提交订单 Submit Order
 */
export const ISubmitOrder = (data) => {
    return request.post({ url: '/api/v1/order', data }, async (res) => {
        return res
    })
}
