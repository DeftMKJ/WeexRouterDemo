<template>
    
    <div class="wrapper">
        <wxc-button text="返回" @wxcButtonClicked="wxcButtonClicked"></wxc-button>
    </div>
</template>
<script>

import { WxcButton, Utils} from 'weex-ui'


import { getListHeight, mainTabBarHeight, navigatorbBarHeight, statusHeight } from '../config/Config'



export default {
    components: { WxcButton },
    data() {
            return {
                listHeight: 0,
            }
        },
    methods: {
        wxcButtonClicked(e) {
            this.toBack();
        }
    },

}
</script>
<style scoped>


.wrapper{
    width: 750px;
    background-color: olive;
    flex:1;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 88px;
}
</style>