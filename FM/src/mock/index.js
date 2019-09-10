import Mock from 'mockjs'

Mock.mock('/booklists','get',{
    'status':200,
    'lists|5':[
        {'navlist|+1':['全部','儿童故事','启蒙课程','其他','国学经典'],
        'contlist|4':[{'id|+1':0,'name':'@cname','pic':'@image(100x100)','title':'@ctitle','num|300-1000':300,'count|20|500':100} ] }
    ]
})