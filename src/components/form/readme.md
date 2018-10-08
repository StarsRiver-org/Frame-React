## 定义一个表单内容，按如下格式进行


    id: '',                //表单id [可选]
    class: 'classname',    //表单样式
    method: 'get / post',  //提交方式
    action: '//',          //提交目标
    target: '_blank',      //页面更新方式
    children: (),          //form 的提示内容 或 其他功能组件
    inputs: [              //定义输入类型 || textarea / select / input[default:text/...]
        { /*--------------------------------------------------------------------*/
          /*                          表单内输入型元素参数                         */
          /*--------------------------------------------------------------------*/
            icon: <OBJ>,           //图标
            check: <OBJ>,          //输入提示
            name: 'name',          //表单单位名称
            value:'',              //表单值
            type:'',               //input类型
            default: '请输入姓名'   //placeholder显示或者select的默认值
            limit: int             //输入数量限制
            change: <FUNC>         //参数变化后执行的动作
            focus: <FUNC>          //焦点获得后的动作
            blur: <FUNC>           //焦点移出后的动作
            enter: <FUNC>          //鼠标进入后的动作
            leave: <FUNC>          //鼠标移出后的动作
            opts: [                //option选项
               {
                   desc: 'pleasecheck',   //描述
                   disable: true          //是否可选
               },
               {
                   desc: 'first',         //描述
                   value: '1'             //值
               },
            ],
        },/*--------------------------------------------------------------------*/
         
        {
            icon: <OBJ>, 
            check: <OBJ>, 
            name: 'work', 
            type: 'textarea', 
        },
        
        {
            name: 'select',                
            type: 'select',
            default: '2',
            opts: [               //option选项
                {desc: 'pleasecheck', disable: true},
                {desc: 'first', value: '1'},
                {desc: 'next', value: '2'},
            ],
        },  //select类型
        
    ],
    
##可以定义的输入类型有：
* textarea
* select
* sec
* input  [text / password / number / ...]

##使用方法：
    import Form {...} from '...';

    ...
    
    forminit = {...}
    
    inputParas = {...}
    
    submit = function(e){...}
    
    change = function(e){...}

    return <Form forminit={forminit} submit={<submit function>} change={<change function>}>
    
    return <Textarea paras={inputParas}>
    
    //submit会在表单提交时触发, 表单参数将存储于 e.map {API formdata method}
    //change事件会在 子元素发生变化时触发，可以通过 e.target 获得变化对象