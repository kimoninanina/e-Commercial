import request from '@/plugins/axios.js'

/**
 * 新出商品 New Product
 * 请求的URL是/api/v1/products，并且将params作为查询query参数传递给服务器。
 * 在函数内部，它使用了一个异步函数(async)来处理响应。当服务器响应成功时，它返回了响应对象res。
 */
export const INewProduct = (params) => {
    return request.get({ url: '/api/v1/newProduct', params }, async (res) => {
        return res
    })
}

/**
 * 商品列表 Our Products
 */
export const IOurProducts = (params) => {
    return request.get({ url: '/api/v1/products', params }, async (res) => {
        return res
    })
}
