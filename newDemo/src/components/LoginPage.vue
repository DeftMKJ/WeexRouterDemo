<template>
    <div class="wrapper" ref="container" :style="{height:mainHeight}">
        <wxc-countdown :interval="1000" tpl="{s}秒" :timeBoxStyle="{backgroundColor: '#C3413D', height: '50px', width: '80px'}" :timeTextStyle="{fontSize: '24px', color: '#FFB706'}" :dotTextStyle="{color: '#C3413D', fontSize: '26px'}" :dotBoxStyle="{width: '30px'}" :style="{marginTop: '10px', justifyContent: 'center'}" :time="TIME" @wxcOnComplete="onCompleted">
        </wxc-countdown>
        <wxc-button text="Login" @wxcButtonClicked="wxcButtonClicked"></wxc-button>
    </div>
</template>
<script>
import { WxcButton, Utils, WxcCountdown } from 'weex-ui'
import { addIconFontSupport, getImagePath } from '../config/IconConfig'

const modal = weex.requireModule('modal')
const dom = weex.requireModule('dom');
const animation = weex.requireModule('animation');

export default {
    components: { WxcButton, WxcCountdown },
    data() {
        return {
            mainHeight: 0,
            TIME: new Date().getTime() + 5000 + ''
        }
    },
    created: function() {
        /*获取图片地址*/
        this.logo = getImagePath('logo','.png');
        /*dom注入字体 需要用到weex模块*/
        addIconFontSupport(dom, "../../");
        /*获取屏幕高度*/
        this.mainHeight = Utils.env.getScreenHeight();
    },
    methods: {
        onCompleted() {
            this.wxcButtonClicked();
        },
        wxcButtonClicked(e) {
            modal.toast({
                message: '自动触发'
            })
            let containerEl = this.$refs[`container`];
            animation.transition(containerEl, {
                styles: {
                    transform: `translateY(${Utils.env.getPageHeight()}px)`
                },
                duration: 1000,
                'cubic-bezier': (0.25, 0.46, 0.45, 0.94),
                delay: 0
            }, () => {
                if (this.$router) {
                    this.$router.replace("/main")
                }
            });

        }
    }
}
</script>
<style scoped>
.wrapper {
    width: 750px;
    height: 1250px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
}
</style>