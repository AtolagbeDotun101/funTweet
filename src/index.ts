const express = require('express')
const app = express()
const userRoute = require('./routes/userRoute')


app.use('/user', userRoute)


const PORT = 4500 || process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
    
})