var app = new Vue({
    el: '#app',
    data: {
        tasks:[],
        item:'',
        time:'',  
    },
    methods:{
        addTask(){
            this.tasks.push(this.item);
            this.item = '';
        },
        deleteTask(index){
            this.tasks.splice(index,1)
        },
        deleteAllTasks(){
            this.tasks=[];
        },
        showTime(){
            var d = new Date();
            var day = d.getDate();
            var month = d.getMonth() + 1;
            var year = d.getFullYear();
            this.time = day + "." + month + "." + year;
        },
    }    
});