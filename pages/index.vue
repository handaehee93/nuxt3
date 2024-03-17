<template>
  <div>
    <p>메인페이지</p>
    <p>
        <NuxtLink to="/SuccessLogin">
            로그인 된 페이지로 이동
        </NuxtLink>
    </p>
    <SlibBody></SlibBody>
  </div>
</template>

<script>
import SlibBody from '../components/SlibBody.vue'

export default {
    components : {
        SlibBody
    },
    setup () {

    }

}
</script>

<style>

</style>