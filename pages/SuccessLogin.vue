<template>
  <div>
    <NuxtLink to="/">
        메인 페이지로 이동
    </NuxtLink>
    <br>
    <br>
    <NuxtLink to="/FileUpload">
      파일 업로드 페이지 이동
    </NuxtLink>
    <br>
    <br>
    <NuxtLink to="/products">
      상품 페이지 이동
    </NuxtLink>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'logined'
  })
</script>

<style>

</style>