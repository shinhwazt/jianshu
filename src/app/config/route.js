import VueRouter from "vue-router"
import home from "../components/home/index.vue"
import bussiness from "../components/bussiness/index.vue"
import travelpc from "../components/travelpc/index.vue"
import customMade from "../components/customMade/index.vue"
import specialRecommended from "../components/specialRecommended/index.vue"
import travelNotes from "../components/travelNotes/index.vue"
import specialHotel from "../components/specialHotel/index.vue"

import bussinessList from "../components/bussiness/bussinessList.vue"
import bussinessCard from "../components/bussiness/bussinessCard.vue"



import travelpcContent from "../components/travelpc/content.vue"

import journeyDetails from "../components/common/journeyDetails.vue"
const routes = [{
    path: "/home",
    component: home
  },
  {
    path: "/bussiness",
    component: bussiness,
    children: [
        {
          path: 'showList',
          component: bussinessList
        },
        {
          path: 'showCard',
          component: bussinessCard
        },
        {
          path: '/',
          redirect: 'showList'
        },
    ]
  },
  {
    path: "/bussiness/details",
    component: journeyDetails,
  },
  {
    path: "/travelpc",
    component: travelpc,
    children: [
        {
          path: 'island',
          component: travelpcContent
        },
        {
          path: 'pulley',
          component: travelpcContent
        },
        {
          path: 'experienceInChina',
          component: travelpcContent
        },
        {
          path: 'southeastAsia',
          component: travelpcContent
        },
        {
          path: 'europe',
          component: travelpcContent
        },
        {
          path: 'auckland',
          component: travelpcContent
        },
        {
          path: 'middleEast',
          component: travelpcContent
        },
        {
          path: '/',
          redirect: 'experienceInChina'
        }
    ]
  },
  {
    path: "/customMade",
    component: customMade,
  },
  {
    path: "/specialRecommended",
    component: specialRecommended,
    children: [
        {
          path: 'showList',
          component: bussinessList
        },
        {
          path: 'showCard',
          component: bussinessList
        },
        {
          path: '/',
          redirect: 'showList'
        },
    ]
  },
  {
    path: "/travelNotes",
    component: travelNotes,
  },
  {
    path: "/bussiness/details/:id",
    component: journeyDetails,
  },
  {
    path: "/specialHotel",
    component: specialHotel,
    children: [
        {
          path: 'showList',
          component: bussinessList
        },
        {
          path: 'showCard',
          component: bussinessList
        },
        {
          path: '/',
          redirect: 'showList'
        },
    ]
  },

  {
    path: '/',
    redirect: '/home'
  },


];
const router = new VueRouter({
  routes
});
export default router;
