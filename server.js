const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const authRoutes = require('./routes/auth')
const mainRoutes = require('./routes/main')
    // const todoRoutes = require('./routes/todos')
const postRoutes = require('./routes/post')
const feedRoutes = require('./routes/feed')


require('dotenv').config({ path: './config/.env' })

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
    // Sessions
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', mainRoutes)
app.use('/auth', authRoutes)
app.use('/post', postRoutes)
app.use('/feed', feedRoutes)

app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running, you better catch it! art http://localhost:5000')
})
