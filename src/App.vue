<template>
  <ThemeToggleComponent />

  <ShareComponent />
  <!-- <HeaderComponent /> -->
  <img alt="App logo" src="/logo.png" height="60" />
  <!-- <ProfilePage /> -->
  <SocialMediaLinks title="@hrwebdevelopers" description="We build blazing-fast, beautiful websites for startups, small businesses and enterprises."/>
  <!-- <FooterComponent /> -->

</template>

<script>
  import SocialMediaLinks from './components/SocialMediaLinks.vue';
  import ShareComponent from './components/ShareComponent.vue';
  import ThemeToggleComponent from './components/ThemeToggleComponent.vue';

  export default {
    name: 'App',
    components: {
      SocialMediaLinks,
      ShareComponent,
      ThemeToggleComponent
    }
  }
</script>

<style>
#app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #f1f1f1;
    margin-top: 60px;
  }

html {
  height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f1f1f1;
      color: #2c3e50;
    }
    
    a {
      color: #2c3e50;
      text-decoration: none;
      transition: all 0.3s ease;
    }
    
    .dark {
      background-color: #2c3e50;
      color: #f1f1f1;
    }
    
    fa-icon {
      color: #2c3e50
  }
</style>
