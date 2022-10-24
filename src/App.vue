<template>
    <ThemeToggleComponent/>

    <ShareComponent />
    <!-- <HeaderComponent /> -->
    <img alt="App logo" src="/logo.png" height="60" />
    <!-- <ProfilePage /> -->
    <SocialMediaLinks title="@hrwebdevelopers" description="We build blazing-fast, beautiful websites for startups, small businesses and enterprises." />
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
},
  
};
</script>

<style>
@import '../public/css/colors.css ';



#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--font-color);
  background-color: var(--bg-color);
  margin-top: 60px;
}

html {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--bg-color);
    color: var(--font-color);
}

body {
  background-color: var(--bg-color);
  color: var(--font-color);
}

a {
    color: var(--font-color);
    text-decoration: none;
    transition: all 0.3s ease;
}

fa-icon {
    color: var(--font-color);
}
</style>
