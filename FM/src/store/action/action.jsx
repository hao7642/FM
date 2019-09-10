import axios from 'axios'


function rest_list(getlist){
    return{
        type:'REST_LIST',
        getlist:getlist
    }
}

function rest_shou(datas){
console.log(datas,'li')

    return{
        type:'REST_SHOU',
        
        datas:datas,
    
    }
}

function save_list(){
    return(dispatch,getState)=>{
        axios.get('/booklist').then(res=>{
           
            dispatch(rest_list(res.data.list))

        })
    }
}
export {
    save_list,rest_list,rest_shou
}