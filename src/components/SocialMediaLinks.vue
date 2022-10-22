<template>
  <div class="container">
    <h3 class="title">{{ title }}</h3>
    <p class="description">{{ description }}</p>
    <div class="links-display">
      <div class="social-link-container">
        <a class="social-link"
          href="http://www.facebook.com/hrwebdevelopers"
          target="_blank"
          rel="noopener noreferrer">
          <fa-icon icon="fa-brands fa-facebook" />
        </a>
        <a class="social-link"
          href="http://www.github.com/hrwebdevelopers"
          target="_blank"
          rel="noopener noreferrer">
          <fa-icon icon="fa-brands fa-2xl fa-github" />
        </a>
        <a class="social-link"
          href="https://instagram.com/hrwebdevelopers"
          target="_blank"
          rel="noopener noreferrer">
          <fa-icon icon="fa-brands fa-instagram" />
        </a>
        <a class="social-link"
          href="https://web.whatsapp.com/send?phone=526644727332"
          target="_blank"
          rel="noopener noreferrer">
          <fa-icon icon="fa-brands fa-lg fa-whatsapp" />
        </a>
      </div>
    </div>
    <h3 class="subtitle">Learn More</h3>

  </div>
</template>

<script>
  export default {
    name: 'SocialMediaLinks',
    components: {

    },
    props: {
      title: String,
      description: String
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #f1f1f1;
  font-size: 2em;
}



.container{
  display: flex;
  flex-direction: column;
  /* height: 100vh – 40px – 30px; */

}

.social-link-container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.250rem;
  width: 100%;
}


.social-link{
  /* padding: .5rem; */
}

.social-link:hover{
  transform: scale(1.1);
}

</style>
