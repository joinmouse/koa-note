/*
* koa-bodyparser
* POST请求的处理时候，koa-bodyparser中间件可以把
* koa2上下文的formData数据解析到ctx.request.body中
*/

const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

// 使用ctx.body解析中间件
app.use(bodyParser())

app.use( async (ctx) => {
    if ( ctx.url === '/' && ctx.method === 'GET' ) {
        // 当GET请求时候返回表单页面
        let html = `
          <h1>koa2 request post demo</h1>
          <form method="POST" action="/">
            <p>userName</p>
            <input name="userName" /><br/>
            <p>nickName</p>
            <input name="nickName" /><br/>
            <p>email</p>
            <input name="email" /><br/>
            <button style="margin-top: 10px;" type="submit">submit</button>
          </form>
        `
        ctx.body = html
    }else if(ctx.url === '/' && ctx.method === 'POST') {
        // 当POST请求的时候
        let postData = ctx.request.body
        console.log(postData)
        ctx.body = postData
    }else {
        ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
    }
})

app.listen(3000, () => {
    console.log('[demo] request post is starting at port 3000')
})
