<template>
    <div>
        <!-- 董瑞傻叉 -->
        <div v-for="(item,index) in list" :key="index">
            {{item.name}}
        </div>
    </div>
</template>
<script>
import axios from "axios"
import {mapState,mapMutations} from "vuex"
export default {
    computed: {
        ...mapState({
            list:state=>state.list
        })
    },
    methods: {
        ...mapMutations({
            undata:"undata"
        })
    },
    created() {
        axios.get("/api/list").then(res=>{
            console.log(res.data)
            this.undata(res.data)
        })
    },
}
</script>