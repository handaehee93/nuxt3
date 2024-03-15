<template>
    <div class="loginCont">
        <div class="left">
            <div class="textW">
                <h3><span>LOGIN</span></h3>
                <spring:message code="login.name.admin-welcome" text="<p>안녕하세요.</p>
                <p>인공지능 데이터라벨링의 세계에 오신 것을</p>
                <p>진심으로 환영합니다.</p>"/>
            </div>
        </div>
        <div class="right">
            <SlibLogin></SlibLogin>
        </div>
    </div>
</template>

<script>
import SlibLogin from "./SlibLogin.vue"

export default {
    components : {
        SlibLogin
    }

}
</script>

<style scoped>
.loginCont{height: 100%; display: -webkit-box; display: -ms-flexbox; display: flex;}
.loginCont .left{width: 100%; height: 100%;}
.loginCont .left .textW{margin-top: 220px; padding-right: 19%; box-sizing: border-box;}
.loginCont .left h3{margin-bottom: 100px; text-align: right;}
.loginCont .left h3 span{font-family: GmarketSansB, SpoqaHanSansB, sans-serif; font-size: 100px; background: -webkit-linear-gradient(142deg, rgba(70,169,179,1) 0%,rgba(75,91,156,1) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;}
.loginCont .left p{font-size: 22px; font-family: SpoqaHanSansB, sans-serif; color: #707070; text-align: right; line-height: 1.5em;}
.loginCont .right{width: 630px; height: 100vh; background-color:#ffffff; flex-shrink: 0; box-shadow: 0px 33px 76px 0px rgba(34, 40, 50, 0.12); -moz-box-shadow: 0px 33px 76px 0px rgba(34, 40, 50, 0.12); -ms-box-shadow: 0px 33px 76px 0px rgba(34, 40, 50, 0.12); -webkit-box-shadow: 0px 33px 76px 0px rgba(34, 40, 50, 0.12);}
.loginCont .right h3{font-size: 26px; font-family: SpoqaHanSansB, sans-serif; color: #242424; text-align: center; margin-bottom: 70px; text-align: center;}
.loginCont .right h3 span{display: inline-block; line-height: 1.6em; border-bottom: 1px solid #000000;}
.loginCont .right .login{width: 413px; margin: 0 auto; margin-top: 220px;}
.loginCont .right .inputBox{position: relative; margin-bottom: 8px;}
.loginCont .right .inputBox.pw{margin-bottom: 16px;}
.loginCont .right .inputBox input{width: 100%; height: 54px; border-radius: 4px; border: 1px solid #dfdfdf; padding: 18px 16px 0; box-sizing: border-box; font-size: 16px; color: #242424; font-family: SpoqaHanSansM, sans-serif;}
.loginCont .right .inputBox .placeholder{font-size: 15px; color: #999999; font-family: SpoqaHanSansM, sans-serif; position: absolute; left: 16px; top: 50%; transform: translateY(-50%);}
.loginCont .right .inputBox .activeText{display: none; font-size: 11px; color: #999999; font-family: SpoqaHanSansM, sans-serif; position: absolute; left: 16px; top: 5px;}
.loginCont .right .inputBox input:focus{border-color: #555555; outline: none;}
.loginCont .right .inputBox input::-ms-reveal {display: none;}
.loginCont .right .inputBox input:-webkit-autofill{font-size: 16px!important; color: #242424!important; font-family: SpoqaHanSansM, sans-serif!important;}
.loginCont .right .inputBox input:-webkit-autofill ~ .placeholder{display: none;}
.loginCont .right .inputBox input:-webkit-autofill ~ .activeText{display: block;}
.loginCont .right .inputBox.active .placeholder{display: none;}
.loginCont .right .inputBox.active .activeText{display: block;}
</style>