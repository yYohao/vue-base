
// let app = new Vue({
//     el: '#app',
//     data: {
//         message : 'Hello Vue!'
//     }
// })
//
// let app2 = new Vue({
//     el: '#app-2',
//     data: {
//         message : '页面加载于' + new Date().toLocaleString()
//     }
// });
//
// let app3 = new Vue({
//     el: '#app-3',
//     data: {
//         seen : true
//     }
// })

let app4 = new Vue({
    el: '#app-4',
    data: {
        todos : [
            {text : '学习JavaScript'},
            {text : '学习Vue'},
            {text : '学习React'},
        ]
    }
});


let app5 = new Vue({
    el: '#app-5',
    data: {
        message : 'Hello Vue'
    },
    methods: {
        reverseMessage : function () {
            this.message = this.message.split('').reverse().join('');
        }
    }
})