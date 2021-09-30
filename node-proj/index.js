const koa = require("koa");
const app = new koa();

app.use(async function (ctx) {
    ctx.body = 'Hello jasen';
});

const port = 8002
app.listen(port);
console.log(`http://localhost:${port}`)
     