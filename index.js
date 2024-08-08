const jsonserver = require("json-server");
const wServer = jsonserver.create();
const middleWare = jsonserver.defaults();
const router = jsonserver.router('db.json')
const PORT = 3000

wServer.use(middleWare)
wServer.use(router)

wServer.listen(PORT,()=>{
    console.log(`Weather portal running at:${PORT}`);
})