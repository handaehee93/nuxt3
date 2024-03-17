<template>
    <div>
      products 메인 페이지
    </div>
    <div v-for="product in products" :key="product.id">
      <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink>
    </div>
    <div>
      <div>useState를 사용한 전역 상태 관리 : {{ counter3 }}</div>
    </div>
  </template>
  
  <script setup>
      definePageMeta ({
          layout: 'logined'
      })
      const counter3 = useState("counter")
      const {data : products} = await useFetch('https://fakestoreapi.com/products')
  </script>
  
  <style>
  
  </style>