import Mock from 'mockjs'
 
let data=[
    {'id|1':0,'name':'@cname','pic':'@image(100x100)'},
    {'id|2':0,'name':'@cname','pic':'@image(100x100)'},
    {'id|3':0,'name':'@cname','pic':'@image(100x100)'},
    {'id|4':0,'name':'@cname','pic':'@image(100x100)'},
    {'id|5':0,'name':'@cname','pic':'@image(100x100)'},
    {'id|6':0,'name':'@cname','pic':'@image(100x100)'},
    {'id|7':0,'name':'@cname','pic':'@image(100x100)'},
    {'id|8':0,'name':'@cname','pic':'@image(100x100)'},
    {'id|9':0,'name':'@cname','pic':'@image(100x100)'},
    {'id|10':0,'name':'@cname','pic':'@image(100x100)'},
    {'id|11':0,'name':'@cname','pic':'@image(100x100)'},
    {'id|12':0,'name':'@cname','pic':'@image(100x100)'},
    {'id|13':0,'name':'@cname','pic':'@image(100x100)'},
    {'id|14':0,'name':'@cname','pic':'@image(100x100)'},
    {'id|15':0,'name':'@cname','pic':'@image(100x100)'},
    {'id|16':0,'name':'@cname','pic':'@image(100x100)'},
    {'id|17':0,'name':'@cname','pic':'@image(100x100)'},
    {'id|18':0,'name':'@cname','pic':'@image(100x100)'},
    {'id|19':0,'name':'@cname','pic':'@image(100x100)'},
    {'id|20':0,'name':'@cname','pic':'@image(100x100)'},
    {'id|21':0,'name':'@cname','pic':'@image(100x100)'},
    {'id|22':0,'name':'@cname','pic':'@image(100x100)'},
    {'id|23':0,'name':'@cname','pic':'@image(100x100)'},
    {'id|24':0,'name':'@cname','pic':'@image(100x100)'},
]

// Mock.mock('/goodlist','post',function(options){

//     var {page,pageSize}=JSON.parse(options.body)
//     var arr =data.slice((page-1)*pageSize,page*pageSize)
//     return{
//         'status':200,
//         'page':page,
//         'pageSize':pageSize,
//         'total':data.length,
//         'list':arr
//     }
// })
// Mock.mock('/goodlist','post',function(options){
//     var {page,pageSize}=JSON.parse(options.body)
//     var arr=data.slice((page-1)*pageSize,page*pageSize)

//     return {
//         'status':200,
//         'page':page,
//         'pageSize':pageSize,
//         'total':data.length,
//          'list':arr
//     }
// })
// Mock.mock('/goodlist','post',function(options){
//     var {page,pageSize}= JSON.parse(options.body)
//     var arr =data.slice((page-1)*pageSize,page*pageSize)
//     return{
//         'status':200,
//         "page":page,
//         'pageSize':pageSize,
//         'total':data.length,
//         'list':arr
//     }
// })

  
// Mock.mock('/carousel','post',function(options){
//     var {count}=JSON.parse(options.body)
//     return Mock.mock({
//          'status':200,
//         'list|30':[
//             {

//                 'id':'',
//                 'name':'',
//                 'link':'',
//                 'pic':'',
//             }
//         ]
       
//     }).list.slice(0,count)

// })

Mock.mock('/carousel','post',function(options){
    var {count} =JSON.parse(options.body)
    var arr = data.slice(0,count)
    return{
        'status':200
    }
})