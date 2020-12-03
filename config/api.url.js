let ipUrl = 'http://127.0.0.1:7001/default/' 

let servicePath = {
    getArticleList:ipUrl + 'getarticle' ,  //  首页文章列表接口
    getArticleById:ipUrl + 'getarticleById/',  // 文章详细页内容接口 ,需要接收参数
    getArticletype:ipUrl + 'getTypeInfo/',  // 文章详细页内容接口 ,需要接收参数

}
export default servicePath;