<template>
    
    <div class="wrapper">
        <wxc-button text="页面一" @wxcButtonClicked="wxcButtonClicked"></wxc-button>
    </div>
</template>
<script>
// const modal = weex.requireModule('modal')

import { WxcButton, Utils} from 'weex-ui'


import { getListHeight, mainTabBarHeight, navigatorbBarHeight, statusHeight } from '../config/Config'

var navigator =  weex.requireModule('navigator')


export default {
    components: { WxcButton },
    data() {
            return {
                listHeight: 0,
            }
        },
    methods: {
        wxcButtonClicked(e) {
            // modal.toast({message:'点击按钮触发页面一'});
            this.jumpWithParams("FourthPage",{})
        }
    },
    // created: function () {
    //         this.listHeight = getListHeight(Utils.env.getScreenHeight() - navigatorbBarHeight - mainTabBarHeight, Utils);
    //     },
}
</script>
<style scoped>


.wrapper{
    width: 750px;
    background-color: purple;
    height: 1400px;
    justify-content: center;
    align-items: center;
}
</style>