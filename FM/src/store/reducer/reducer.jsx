

let data ={
    getlist:[],
    addlist:[]
    // addlist:localStorage.getItem('took')||[]
}
// if(!localStorage.getItem('took')){
//     localStorage.setItem('took')||[]
// }
let createReact=function(state=data,action){
      switch (action.type) {
          case 'REST_LIST':
              return {...state,getlist:action.getlist};
              case 'REST_SHOU':
                  var newState=JSON.parse(JSON.stringify(state))
                  console.log(newState)

                  var Cartlist= state.addlist.find(item=>{
                        return action.id===item.id
                    })
                    console.log(Cartlist,'asd')
                    if(Cartlist){
                        return state
                    }else{
                        //return 
                        let arr = localStorage.setItem('took',JSON.stringify({addlist:[...state.addlist,action.datas]}))
                     return {...state,arr}
                    }

          default:
              return state
        }
}

export default createReact