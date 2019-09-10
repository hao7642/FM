import Mock from 'mockjs'

Mock.mock('/booklist','get',{
    'status':200,
    'list|5':[
        {'id|+1':0,'name':'@ctitle','pic':'@image(100x100)','title':'@cparagraph(2)','num|300-1000':300,'count|20|500':100}
    ]
})