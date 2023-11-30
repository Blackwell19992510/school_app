<template>
    <form>
    <div class="mb-3">
        <label for="name" class="form-label">name</label>
        <input type="text"  v-model="name" class="form-control" id="name">
    </div>
    <div class="mb-3">
        <label for="amount" class="form-label">Amount</label>
        <input type="text" v-model="amount" class="form-control" id="amount">
    </div>
    <button type="submit" class="btn btn-primary">Save</button>
    <button type="reset" class="btn btn-primary">Reset</button>
    
    </form>
</template>
<script>
import axios from "axios";
import router from "../../Routes";
export default{
    name: "NewCourse",
    data(){
        return{
            name: '',
            amount: '' 
        };
    },
    methods: {
    async createCourse() {
       await axios.post("http://127.0.0.1:8000/api/create-courses"),
       {
        'name':this.name,
        'amount':this.amount
       }
       router.push('/coursespage')
    }
}
}
</script>