<template>
    <div class="card-link hover-paint" @mouseover="hovering = true" @mouseout="hovering = false">
        <img class="link-img" width="20" height="20" :src="image" />
        <p class="link-title">{{ title }}</p>
        <div class="link-share">
            <fa-icon @click="shareDialog()" :class="hovering ? 'showBtn' : 'hideBtn'" class="copy-icon" icon="fa-solid fa-share" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'LinkComponent',
    setup() {
        const hovering = ref(false);

        return {
            hovering
        };
    },
    props: {
        image: String,
        title: String,
        url: String
    },
    methods: {
        shareDialog() {
            if (navigator.share) {
                navigator
                    .share({
                        title: this.title,
                        text: this.title,
                        url: this.url
                    })
                    .then(() => console.log('Successful share'))
                    .catch((error) => console.log('Error sharing', error));
            } else {
                console.log('Share not supported');
            }
        }
    }
};
</script>

<style>
.card-link {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width: 50%;
    margin: 0.5rem;
    padding: 0 1rem;
    cursor: pointer;
}

.link-img {
    width: 2rem;
    height: auto;
}

.link-title {
    margin: 0;
    padding: 0;
}

.link-share:hover {
    transform: scale(1.2);
    animation-duration: 1s;
    animation-name: struggling;
}

@keyframes struggling {
    0% {
        transform: rotate(15deg);
    }

    25% {
        transform: rotate(-15deg);
    }

    50% {
        transform: rotate(15deg);
    }

    100% {
        transform: rotate(0deg);
    }
}

.showBtn {
    display: block;
}

.hideBtn {
    display: none;
}

.hover-paint {
    min-width: 50%;
    height: 3em;
    border-radius: 0.2rem;
    border: none;
    position: relative;
    overflow: hidden;
    z-index: 1;
    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
}

.hover-paint:hover {
    color: #f1f1f1;
    transition: color 0.6s ease-in-out;
}

.hover-paint::before {
    content: '';
    width: 0;
    width: 0;
    height: 3em;
    border-radius: 0.2rem;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right, #305dfc 0%, #f29d7a 100%);
    transition: 0.5s ease;
    display: block;
    z-index: -1;
}

.hover-paint:hover::before {
    width: 100%;
}
</style>
