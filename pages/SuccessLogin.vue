<template>
  <div>
    <!-- <NuxtLink to="/">
        메인 페이지로 이동
    </NuxtLink> -->
    <br>
    <br>
    <NuxtLink to="/FileUpload">
      파일 업로드 페이지 이동
    </NuxtLink>
    <br>
    <br>
    <NuxtLink to="/products">
      ajax 호출 페이지 이동
    </NuxtLink>
    <hr>
    <div>useState를 사용한 전역 상태 관리 : {{ counter }}</div>
    <button @click="clearNuxtState()">useState 함수 초기화</button>
    <hr>
    <div>Pinia를 사용한 전역 상태 관리 : {{counterStore.name}}</div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'logined'
  })

  const counter = useState('counter', () => { return 1})

  const counterStore = useCounterStore();

</script>

<style>

</style>