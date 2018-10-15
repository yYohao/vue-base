Vue.component('todo-item', {
    props: ['todo'],
    template : '<li>{{todo.text}}</li>'
})

let app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList : [
            {id: 0, text : '学习JavaScript'},
            {id: 1, text : '学习Vue'},
            {id: 2, text : '学习React'},
        ]
    }
})