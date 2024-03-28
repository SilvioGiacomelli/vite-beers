import { reactive } from 'vue'

export const store = reactive({
  mainTitle:'Vite Beers',
  apiUrl:'https://api.sampleapis.com/beers/ale',
  cardList:[],
  queryParams:{
  }
})