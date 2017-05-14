Components/


  Fixed //固定 style={{top:0}} or style={{bottom:0}}


  RestoredScroll //记录滚动条 <RestoredScroll id='youID'>{this.children}</RestoredScroll>


  Content //内容区域 style={{top:46,bottom:50}} 上下间距


  ColumnView //首页列表显示 <ColumnView title='youTitle' data={data}/>
    const data = [
    {
        img: 'http://puui.qpic.cn/tv/0/10076887_1080607/0',
        title: '约吧大明星2·李晨爆笑喊麦挑战天佑',
        author: 'tzuser',
    },]


  TabNav //底部导航组件 
    <TabNav data={tabData} index={index} onTouchTap={(item)=>{history.push(item.path)}} />
    data:[{title:'影院',icon:'i-x-mpg',path:'/tab/home'},{title:'分类',icon:'i-icon2',path:'/tab/type'}];
          icon 首页配置样式引入  使用阿里图标 http://www.iconfont.cn/
    onTouchTap:(item)返回当前点击的item

  AttrIcon //设置页 属性图标
    <AttrIcon icon='i-icon066' />
          icon 首页配置样式引入  使用阿里图标