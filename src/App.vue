<template>

  <ShareComponent />
  <!-- <HeaderComponent /> -->
  <img alt="App logo" src="./assets/logo.png" height="60">
  <!-- <ProfilePage /> -->
  <SocialMediaLinks title="@hrwebdevelopers" description="We build blazing-fast, beautiful websites for startups, small businesses and enterprises."/>
  <!-- <FooterComponent /> -->

</template>

<script>
  import SocialMediaLinks from './components/SocialMediaLinks.vue';
  import ShareComponent from './components/shareComponent.vue';

  export default {
    name: 'App',
    components: {
      SocialMediaLinks,
      ShareComponent
    }
  }
</script>

<style>
  html {
    background: rgb(242,157,122);
    background: linear-gradient(0deg, rgba(242,157,122,1) 0%, rgba(28,65,171,1) 100%);
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #f1f1f1;
    margin-top: 60px;
  }
</style>
