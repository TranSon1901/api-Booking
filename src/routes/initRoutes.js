import routerAuthor from './auth.js'
import routerHotels from './hotels.js'
import routerRooms from './rooms.js'
import routerUsers from './users.js'
const initRouter =(app)=>{
   app.use('/author',routerAuthor)
   app.use('/hotel',routerHotels)
   app.use('/room',routerRooms)
   app.use('/user',routerUsers)
}
export default initRouter