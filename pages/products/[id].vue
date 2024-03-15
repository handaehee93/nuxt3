<template>
    <div>
      <div>
          Product details {{ id }}
          <p>상품 이름 : {{ products.title }}</p>
          <p>상품 가격 : {{ products.price }}</p>
          <p>상품 아이디 : {{ products.id }}</p>
      </div>
    </div>
  </template>
  
  <script setup >

      const {id} = useRoute().params
      const uri = 'https://fakestoreapi.com/products/' + id                                                            
      const {data : products} = await useFetch(uri)
  
      definePageMeta({
          layout: 'logined'
      })
  </script>
  
  <style>
  
  </style>