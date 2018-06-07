<template>
    <div :style="{height: mainHeight, width: '750px'}"> 
        <wxc-tab-bar :tab-titles="tabTitles"
                 :tab-styles="tabStyles"
                 title-type="iconFont"
                 @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected" class="mikejin">
            <div class="item-container" :style="contentStyle">
                <first-page></first-page>
            </div>
            <div class="item-container" :style="contentStyle">
                <second-page></second-page>
            </div>
            <div class="item-container" :style="contentStyle">
                <third-page></third-page>
            </div>
        </wxc-tab-bar>
    </div>
</template>

<style scoped>

.item-container {
        width: 750px;
        background-color: #797979;
    }
    .mikejin{
    }
</style>
<script>
    import {Utils, WxcTabBar,WxcMinibar} from 'weex-ui';
    import Config from '../config/MainTabConfig'

    import FirstPage from './FirstPage.vue'
    import SecondPage from './SecondPage.vue'
    import ThirdPage from './ThirdPage.vue'
    import {getIonFontPath} from '../config/IconConfig'
    import {addIconFontSupport} from '../config/IconConfig'
    import {getRealScreenHeight,navigatorbBarHeight,mainTabBarHeight} from '../config/Config'

    const dom = weex.requireModule('dom');

    const modal = weex.requireModule('modal');

    export default {
        components: { WxcTabBar,FirstPage,SecondPage,ThirdPage,WxcMinibar},
        data: () => ({
            tabTitles: Config.tabIconFontTitles,
            tabStyles: Config.tabIconFontStyles,
            mainHeight: 0,
        }),
        created() {
            /*
            这里底部的计算有点奇怪，一般减去导航和底部，需要把X的高度和底部计算进去
             */
            const topStatusHeight = Utils.env.isWeb() ? 0 : (Utils.env.isIPhoneX() ? 88 : 44);
            const tabPageHeight = Utils.env.getScreenHeight() - navigatorbBarHeight - topStatusHeight - mainTabBarHeight;
            this.contentStyle = {height: tabPageHeight};
            // 这里的真实高度是全屏-32的顶部高度  获取到实际高度之后，这里就会留白顶部32px
            this.mainHeight =  getRealScreenHeight(Utils)
            addIconFontSupport(dom, "../../")
        },
        methods: {

        }
    };
</script>
