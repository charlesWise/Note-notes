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
                var vm = this
                vm.msg = ''
                vm.result = ''

                $.ajax({
                    url: vm.loginUrl,
                    type: 'POST',
                    dataType: 'json',
                    data: vm.loginModel,
                    success: function(data) {
                        vm.msg = '登录成功！'
                        sessionStorage.setItem('accessToken', data.access_token)
                        sessionStorage.setItem('userName', data.userName)
                    },
                    error: vm.requestError
                })
            },
            logout: function() {
                var vm = this
                vm.msg = ''

                $.ajax({
                    url: vm.logoutUrl,
                    type: 'POST',
                    dataType: 'json',
                    success: function(data) {
                        vm.msg = '注销成功！'
                        vm.userName = ''
                        vm.loginModel.userName = ''
                        vm.loginModel.password = ''

                        sessionStorage.removeItem('userName')
                        sessionStorage.removeItem('accessToken')
                    },
                    error: vm.requestError
                })
            },
            requestError: function(xhr, errorType, error) {
                this.msg = xhr.responseText
            }
        }
    }
</script>
<style>
    body{
        background-color:#ff0000;
    }
</style>