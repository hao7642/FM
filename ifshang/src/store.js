import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists:[]
  },
  mutations: {
    addToCrte(state,good){
      var foodlist=state.lists.find(isgood=>good.id==isgood.id)
       if(foodlist){
         foodlist.count++
       }else{
         Vue.set(good,'count',1)
         state.lists.push(good)
       }
    },
    addlist(state,id){
      var foodlist = state.lists.find(good=>id==good.id)
      if(foodlist.count<5) foodlist.count++
      
    },
    sublist(state,id){
      var foodlist=state.lists.find(good=>id==good.id)
      if(foodlist&&foodlist.count>1){
        foodlist.count--
      }
    },
    dellist(state,id){
     state.lists.splice(id,1)
    }

  },
  actions: {

  }
})
