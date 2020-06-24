<template>
      <header>
      <img :src="require('@/assets/images/logo.png')" alt="logo" />
      <router-link tag='h2' class='logo-text' :to="{name: 'promo'}">
        Spor
      </router-link>
    </header>
</template>