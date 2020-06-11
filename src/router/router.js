
import Router from 'vue-router'
import Login from '../FullpageLayout/Login.vue'
import HomeMain from '../views/HomeMain.vue'
import SpeakUp from '../views/SpeakUp.vue'
import Notification from '../views/Notification.vue'
import Courses from '../views/Courses.vue'
import FullPageLayout from '../FullpageLayout/FullPageLayout.vue'
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: FullPageLayout,
            children: [
                {
                    path: '/login',
                    name:'login',
                    component: Login
                },
            ]
        },
        
        {
          path: '/',
          name: 'HomeMain',
          component: HomeMain
        },
        
      
      {
        path: '/speakup',
        name: 'SpeakUp',
        component: SpeakUp
      },
      {
        path: '/notification',
        name: 'Notification',
        component: Notification
      },
      {
        path: '/courses',
        name: 'Courses',
        component: Courses
      }
      
    ]
    
    
})
export default router