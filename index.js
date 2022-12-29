const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())  // 모든 요청에 허용

app.get('/', (req, res)=>{
  res.send('Hello~~~ World!!!')
})
app.get('/sound/:name', (req, res)=>{
  const { name }= req.params
  console.log(name)

  if(name == "dog"){
    res.json({'sound': '멍멍'})
  } else if(name =="cat"){
      res.json({'sound': '야옹야옹'})
  } else if(name =="pig"){
      res.json({'sound': '꿀꿀~~'})
  }else {
      res.json({'sound': '알수 없음'})
  }

  res.send('Hello~~~ World!!!')
})
app.listen(port, ()=>{
  console.log(`Example app listejing on prt ${port}`)
})