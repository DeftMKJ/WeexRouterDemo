import {PAGE_SIZE} from '../config/Config'

export default {
    methods: {
        reset(to) {
            if(WXEnvironment.platform === 'Web') {
                if (this.$router) {
                    this.$router.replace(to)
                }
            } else {
                if (this.$router) {
                    this.$router.replace(to)
                }
            }
        },
        // getModel(){
        //     return weex.requireModule('modal');
        // },
        getNavigator() {
            return weex.requireModule('navigator')
        },
        toBack() {
            if(WXEnvironment.platform === 'Web') {
                this.$router.back()
            }  else {
                this.getNavigator().pop({animated: "true"})
            }
        },
        getBaseUrl() {
            let bundleUrl = weex.config.bundleUrl;
            // this.getModel().toast({message:bundleUrl});
            bundleUrl = String(bundleUrl);
            let nativeBase;
            let isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

            let isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
            if (isAndroidAssets) {
                nativeBase = 'file://assets/dist/';
                console.log('Android');
            }
            else if (isiOSAssets) {
                nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
                // this.getModel().toast({message:'isIOS'});
            } else {
                console.log('web');
                let host = 'localhost:8080';
                let matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
                if (matches && matches.length >= 2) {
                    host = matches[1];
                }
                nativeBase = 'http://' + host + '/';
            }
            console.log(nativeBase);
            return nativeBase;
        },
        jumpInter(to) {
            if (this.$router) {
                this.$router.push(to)
            }
        },
        /*
        this.jumpWithParams("RepositoryDetailPage", {
                            userName: 'DeftMKJ',
                            reposName:  'TaoBaoShoppingCart',
                            
             web 
            index.js:37154 http://192.168.1.47:8080/index.js  weex.config.bundleUrl;
            index.js:37167 web
            index.js:37175 http://192.168.1.47:8080/
            index.js:37191 111http://192.168.1.47:8080/
            index.js:37192 222
            index.js:37193 333http://192.168.1.47:8080/SearchPage.js
            http://192.168.1.47:8080/RepositoryDetailPage.js?userName=DeftMKJ&reposName=MKJWechat&title=MKJWechat

         */
        jumpWithParams(to, params) {
            // this.getModel().toast({message:'混入进去参数调整'});

            if(WXEnvironment.platform === 'Web') {
                // this.getModel().toast({message:'混入进去参数调整  web'});
                if (this.$router) {
                    this.$router.push({name: to, params: params})
                }
            } else {
                // this.getModel().toast({message:'混入进去参数调整 非 web'});
                let path = this.getBaseUrl();
                let q = this.createQuery(params)
                console.log('111' + path);
                console.log('222' + q);
                // this.getModel().toast({message:path + to + '.js' + q});
                this.getNavigator().push({
                    url: path + to + '.js' + q,
                    animated: "true"
                }, event => {
                })
            }
        },
        // object 转 URL 参数
        createQuery(obj) {
            if(obj === null || obj === "" || obj.length === 0) {
                return ""
            }
            let url = '?';
            for (let key in obj) {
                if (obj[key] !== null) {
                    url += (key + '=' + encodeURIComponent(obj[key]) + '&');
                }
            }
            return url.substring(0, url.lastIndexOf('&'));
        },
        // 'xxx.js?name=aa' 转 {name: 'aa'}
        // http://192.168.1.47:8080/RepositoryDetailPage.js?userName=DeftMKJ&reposName=MKJWechat&title=MKJWechat
        getQueryData(url) {
            url = url.substring(url.indexOf('.js?') + 3);
            let result = {};
            if (url.indexOf("?") != -1) {
                let str = url.substr(1);
                let strs = str.split("&");
                for (let i = 0; i < strs.length; i++) {
                    result[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
                }
            }
            return result;
        },
        /*
        declare type WeexConfigAPI = {
            bundleUrl: string;
            bundleType?: string;
            env: WeexEnvironment;
        }
         */
        getQuery() {
            if (WXEnvironment.platform === 'Web') {
                return this.$route.params;
            } else {
                return this.getQueryData(weex.config.bundleUrl);
            }
        },
        getUserInfo() {
            return this.$store.state.user.userInfo
        },
        getPageSize() {
            return PAGE_SIZE
        },
    }
}