# WeexRouterDemo
## weex + vue + vue-router的简单介绍
> Weex看了三周，可以说是从完全不懂，能写一点东西出来，这就比较有意思了，很多坑和很多东西需要记录一下
> 
> 这里主要展示了单理由页面和多个页面的跳转，还有一个我个人用的舒服的就是调试功能，因为有些东西压根不能在Web用，连官方自己的Demo都报错，我也就放弃Web服务了，直接启动App，然后用WXDevtool来进行辅助调试，就可以通过编辑器的代码更新保存，然后我们启用本地服务器，之后会在App，web进行热更新，Bug调试非常好用 [**通俗易懂的WXDevtool调试工具使用**](https://blog.csdn.net/deft_mkjing/article/details/80397305)
+ 1.FlexBox布局（默认都是Flex-direction=column）
+ 2.Weex如何读取本地图片,以iOS为例，需要手动拖进Bundle里面去
+ 3.JS async/await [**传送门**](https://segmentfault.com/a/1190000007535316)
+ 4.Promise对象的使用 [**Promise**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)
+ 5.`this.mainHeight = Utils.env.getScreenHeight();` 可以通过weex-ui给打方法获取到机子的高度，这里例如375-667的iphone机子，对应的高度就是667*2
+ 6.text标签lines不会在iOS上面进行wrap出现...，需要text-overflow:ellipsis;
+ 7.不支持v-html,如果json中有&lt,&gt,&amp等转义字符，需要自己通过replace的方法正则过滤 [**正则过滤转义字符**](https://blog.csdn.net/deft_mkjing/article/details/51518022)
+ 8.dom添加自己的字体以及获取图片本地路径
      const webIconFontPath = 'static/font/iconfont.ttf';
      const androidIconFontPath = 'local:///font/iconfont.ttf';
      const iosIconFontPath = 'local:///font/iconfont.ttf';

      export function getIonFontPath(abs) {
          if (WXEnvironment.platform === 'Web') {
              return abs + webIconFontPath
          } else if (WXEnvironment.platform.toLowerCase() === 'android') {
              return androidIconFontPath
          } else {
              return iosIconFontPath
          }
      }

      export function addIconFontSupport(dom, abs) {
          if(dom) {
              dom.addRule('fontFace', {
                  'fontFamily': "wxcIconFont",
                  'src': `url('${getIonFontPath(abs)}')`
              });
          }
      }


      export function getImagePath(name, type = '', abs = '../../') {
          if (WXEnvironment.platform === 'Web') {
              return `${abs}static/img/${name}${type}`
          } else if (WXEnvironment.platform === 'android') {
              return `local:///${name}`;
          } else {
              return `local:///${name}${type}`;
          }
      }

+ 9.默认Common配置下打包是没有经过压缩的，如果你在dev和serve命令后面增加-p用UglifyJs，压缩出来的js文件是没有问题，但是WeexSDK不认识，因此头部的
// { "framework": "Vue"}  标识符是不能压缩的，不然SDK不认识就会报错
><Weex>[log]WXSDKInstance.m:182, Start rendering page:file:///Users/mintou/Library/Developer/CoreSimulator/Devices/2F15BFAE-0117-4912-BA20-83299CF1AD66/data/Containers/Bundle/Application/F2AB40C1-1AEB-4F94-8361-306120A1489A/MinTouJF.app/bundlejs/MediaPage.js?random=-1969150809
2018-06-01 14:13:25.675560+0800 MinTouJF[17129:258141] <Weex>[error]WXJSCoreBridge.m:146, jsLog: [JS Framework] COMPATIBILITY WARNING: Weex DSL 1.0 (.we) framework is no longer supported! It will be removed in the next version of WeexSDK, your page would be crash if you still using the ".we" framework. Please upgrade it to Vue.js or Rax.
2018-06-01 14:13:25.751434+0800 MinTouJF[17129:258141] <Weex>[error]WXMonitor.m:250, [WX_KEY_EXCEPTION_WXBRIDGE] [undefined:6:540010] ReferenceError: Can't find variable: Vue
[**传送门**](https://segmentfault.com/q/1010000009562498)
  
+ 10.vue-router默认是单页面模式，也就是dist下面打包出来的只有一个js文件，如果App开发，你全是单页面路由，那就是和网页H5一样了，点进去，退出来，就很蠢，这里就用到Weex的Navigator模块，顺便通过更改配置编译出多个JS文件
首先在src文件夹下面弄一个entry入口文件标识，把你需要单独打包的js文件弄进去，然后里面的内容和index.js一样，具体的话可以看项目里面
然后在配置文件中多搞一个js入口，需要几个打包几个（webpack.common.conf.js里面）
```
   const weexEntry = {
              'index': helper.root('entry.js'),
              'FourthPage': helper.root('entry/FourthPage.js'),
            }
```

         
+ 11.Vue mixins，这里的可以理解为iOS里面给类绑定了一个Category，全局方法，直接在初始化的时候写入公共方法文件，直接用，方便

+ 12.良心插件weex-ui [**weex-ui**](https://alibaba.github.io/weex-ui/#/cn/packages/wxc-minibar/)



## 具体展示
![](https://github.com/DeftMKJ/WeexRouterDemo/blob/master/animation%E7%BB%88%E6%9E%81.gif)
