import routerAuth from './auth.js'
import routerHotels from './hotels.js'
import routerRooms from './rooms.js'
import routerUsers from './users.js'
const initRouter =(app)=>{
   app.use('/api/authen',routerAuth)
   app.use('/api/hotels',routerHotels)
   app.use('/api/rooms',routerRooms)
   app.use('/api/users',routerUsers)
}
export default initRouter