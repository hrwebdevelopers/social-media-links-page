<template>
    <div class="container">
        <h3 class="title">{{ title }}</h3>
        <p class="description">{{ description }}</p>
        <div class="links-display">
            <div class="social-link-container">
                <a class="social-link" href="http://www.facebook.com/hrwebdevelopers" target="_blank" rel="noopener noreferrer">
                    <fa-icon icon="fa-brands fa-facebook" />
                </a>
                <a class="social-link" href="http://www.github.com/hrwebdevelopers" target="_blank" rel="noopener noreferrer">
                    <fa-icon icon="fa-brands fa-2xl fa-github" />
                </a>
                <a class="social-link" href="https://instagram.com/hrwebdevelopers" target="_blank" rel="noopener noreferrer">
                    <fa-icon icon="fa-brands fa-instagram" />
                </a>
                <a class="social-link" href="https://web.whatsapp.com/send?phone=526644727332" target="_blank" rel="noopener noreferrer">
                    <fa-icon icon="fa-brands fa-lg fa-whatsapp" />
                </a>
            </div>
        </div>
        <h3 class="subtitle">Learn More</h3>
        <div class="link-container">
            <LinkComponent image="/logo.png" title="New Idea or Project? 💡" url="https://www.hr-webdev.com" />
            <LinkComponent image="/favicon.ico" title="We built with VueJS.org Framework V3" url="https://vuejs.org/" />
        </div>
        <h3 class="subtitle">Community Projects</h3>
        <div class="link-container">
            <LinkComponent image="/qr-code.png" title="QR Code Generator" url="https://hectorromerodev.github.io/qr-code-generator/" />
            <LinkComponent image="/excel-to-json.png" title="Excel to JSON" url="https://hectorromerodev.github.io/excel-to-json-v2/" />
        </div>
    </div>
</template>

<script>
import LinkComponent from './LinkComponent.vue';

export default {
    name: 'SocialMediaLinks',
    props: {
        title: String,
        description: String
    },
    components: {
        LinkComponent
    }
};
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
.container {
    display: flex;
    flex-direction: column;
}

.social-link-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.25rem;
    width: 100%;
}

.social-link {
    font-size: 2em;
}

.social-link:hover {
    transform: scale(1.1);
}

.link-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
