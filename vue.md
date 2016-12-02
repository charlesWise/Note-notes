this.$children[i] //获取子组件this指向
this.$parent //获取父组件this指向
****************************************************************************************
<template id="parent-component">
    <child-component1 v-ref:cc1></child-component1>
    <child-component2 v-ref:cc2></child-component2>
    <button v-on:click="showChildComponentData">显示子组件的数据</button>
</template>
Vue.component('parent-component', {
    template: '#parent-component',
    components: {
        'child-component1': {
            template: '#child-component1',
            data: function() {
                return {
                    msg: 'child component 111111'
                }
            }
        },
        'child-component2': {
            template: '#child-component2',
            data: function() {
                return {
                    msg: 'child component 222222'
                }
            }
        }
    },
    methods: {
        showChildComponentData: function() {
            alert(this.$refs.cc1.msg);
            alert(this.$refs.cc2.msg);
        }
    }
})
****************************************************************************************
