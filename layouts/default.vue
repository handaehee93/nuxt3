<template>
    <div class="loginW">
        <div class="loginTop">
            <h1>
                <span>
                    <NuxtLink class="logo"  to="/">
                        CrowdML 작업관리 시스템
                    </NuxtLink>
                </span>  
            </h1>
        </div>
    </div>
    <div>
        <slot />
    </div>
</template>

<script>
export default {
    
    
}
</script>

<style scoped>
.loginW{width: 100%; min-width: 1240px; max-height: 100vh; display: -webkit-box; display: -ms-flexbox; -webkit-box-orient: vertical; -ms-flex-direction: column; flex-direction: column; display: flex; }
.loginTop{display:flex; justify-content:space-between; background-color: #212744; padding: 20px; flex-shrink: 0;}
.loginTop h1{font-family: SpoqaHanSansM, sans-serif; color: #f6f6f6; font-size: 18px;}
.loginTop h1 span .logo{font-family: SpoqaHanSansB, sans-serif; color: #3dbdca; font-size: 20px; text-decoration: none;}
.loginTop select#langSel{height:27px; width:60px; background:transparent; color:#fff; padding-left:3px; border-radius:1px;}

</style>