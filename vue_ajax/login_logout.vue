<template>
    <div id="app">
        <div class="container text-center">
            <span id="message">{{ msg }}</span>
        </div>
        <div class="container">
            <div class="account-info">
                <span v-if="userName">{{ userName }} | <a href="#" @click="logout">注销</a></span>
            </div>
        </div>
        <div class="container">
            <div class="form-group">
                <label>电子邮箱</label>
                <input type="text" v-model="loginModel.username" />
            </div>
            <div class="form-group">
                <label>密码</label>
                <input type="text" v-model="loginModel.password" />
            </div>
            <div class="form-group">
                <label></label>
                <button @click="login">登录</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        el: '#app',
        data: {
            loginUrl: 'http://localhost:10648/token',
            logoutUrl: 'http://localhost:10648/api/Account/Logout',
            loginModel: {
                username: '',
                password: '',
                grant_type: 'password'
            },
            msg: '',
            userName: ''
        },
        ready: function() {
            this.userName = sessionStorage.getItem('userName')
        },
        methods: {
            login: function() {
                this.$http.post(this.loginUrl, this.loginModel)
                        .then((response) => {
                            var body = response.json()
                            this.msg = '登录成功！'
                            this.userName = body.userName

                            sessionStorage.setItem('accessToken', body.access_token)
                            sessionStorage.setItem('userName', body.userName)

                        }).catch(this.requestError)
            },
            logout: function() {
                this.$http.post(this.logoutUrl)
                        .then((response) => {
                            this.msg = '注销成功！'
                            this.userName = ''
                            this.loginModel.username = ''
                            this.loginModel.password = ''

                            sessionStorage.removeItem('userName')
                            sessionStorage.removeItem('accessToken')

                        }).catch(this.requestError)
            },
            requestError: function(response) {
                this.msg = response.json()
            }
        }
    }
</script>
<style>
    body{
        background-color:#ff0000;
    }
</style>