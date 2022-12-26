import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ApplicantsManager from "@/views/ApplicantsManager";
import AddApplicant from "@/views/AddApplicant";
import EditApplicant from "@/views/EditApplicant";
import ViewApplicant from "@/views/ViewApplicant";
import PageNotFound from "@/views/PageNotFound";

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: "/Applicants",
    component: HomeView
  },
  {
    path: '/Applicants',
    name: 'ApplicantsManager',
    component: ApplicantsManager
  },
  {
    path: '/Applicants/add',
    name: 'AddApplicant',
    component: AddApplicant
  },
  {
    path: '/Applicants/edit/:ApplicantId',
    name: 'EditApplicant',
    component: EditApplicant
  },
  {
    path: '/Applicants/view/:ApplicantId',
    name: 'ViewApplicant',
    component: ViewApplicant
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
