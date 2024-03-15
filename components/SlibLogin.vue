<template>
    <div class="login">
        <img src="../public/favicon.ico" style="height:30px; width:138px" >
        <div class="login_form">
            <form @submit.prevent="submitForm">
                <fieldset>
                    <div class="inputBox id">
                        <input name="id" type="text" placeholder="이용자 id" v-model="userId">
                    </div>
                    <div class="inputBox password">
                        <input name="password" type="password" placeholder="비밀번호" v-model="passwd" > 
                    </div>
                    <button type="submit">로그인</button>
                </fieldset>
            </form>
        </div>
    </div>
</template>

<script >
import axios from "axios"

export default {
    data() {
        return {
            userId: '',
            passwd: ''
        }
},
    methods: {
        submitForm () {
            const fetch = axios.create({
                baseURL: "http://localhost:27300"
            })
            fetch.post("/auth/login" , {
                id: this.userId, 
                password: this.passwd
            })
            .then(function(response){
                var data = response.data;
                if(data.code == 0) {
                    navigateTo('/SuccessLogin')
                }
                console.log(response)
                //console.log("data=="+JSON.stringify(data));
                console.log("code==",data.code);
                console.log("message==",data.message);
            })
            .catch(function(error){
                //console.log("error=="+error);
            });
        }
}
}

</script>

<style lang="scss" scoped>

</style>