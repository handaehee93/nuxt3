<template>
    <div>
      products 메인 페이지
    </div>
    <div v-for="product in products" :key="product.id">
      <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink>
    </div>
  </template>
  
  <script setup>
      definePageMeta ({
          layout: 'logined'
      })
  
      const {data : products} = await useFetch('https://fakestoreapi.com/products')
  </script>
  
  <style>
  
  </style>