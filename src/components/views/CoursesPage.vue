<template>
    <table class="table">
    <thead>
        <tr>
        <th scope="col">id</th>
        <th scope="col">name</th>
        <th scope="col">amount</th>
        <th scope="col">Handle</th>
        </tr>
    </thead>
    <tbody>
       
    </tbody>
    </table>
</template>
<script>
import axios from "axios";
export default{
    name: "CoursesPage",
    data(){
        return{
            Courses: [],
        };
    },
    methods: {
    async getCourses() {
        const {data} = await axios.get("http://127.0.0.1:8000/api/get-courses");
        this.Courses = data;
    },
    created() {
    this.getCourses();
  }
}
}
</script>