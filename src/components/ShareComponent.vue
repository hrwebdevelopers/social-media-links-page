<template>
    <div class="float-container">
        <a class="share-btn" @click="show = !show">
            <fa-icon icon="fa-solid fa-share" />
        </a>
    </div>

    <div v-if="show" class="dialog-container">
        <div class="dialog">
            <div class="dialog-header">
                <h4>Share this</h4>
                <a class="close-btn" @click="show = !show">
                    <fa-icon icon="fa-solid fa-x" />
                </a>
            </div>
            <div class="dialog-body">
                <a class="card-link-share" :href="fbShare" target="_blank" rel="noopener noreferrer">
                    <fa-icon class="box fb-brand" icon="fa-brands fa-facebook" />
                    <p>Share on Facebook</p>
                    <fa-icon icon="fa-solid fa-chevron-right"></fa-icon>
                </a>

                <a class="card-link-share" :href="inShare" target="_blank" rel="noopener noreferrer">
                    <fa-icon class="box in-brand" icon="fa-brands fa-linkedin" />
                    <p>Share on Linkedin</p>
                    <fa-icon icon="fa-solid fa-chevron-right"></fa-icon>
                </a>

                <a class="card-link-share" :href="twShare" target="_blank" rel="noopener noreferrer">
                    <fa-icon class="box tw-brand" icon="fa-brands fa-twitter" />
                    <p>Share on Twitter</p>
                    <fa-icon icon="fa-solid fa-chevron-right"></fa-icon>
                </a>

                <a class="card-link-share" :href="waShare" target="_blank" rel="noopener noreferrer">
                    <fa-icon class="box wa-brand" icon="fa-brands fa-whatsapp" />
                    <p>Share via WhatsApp</p>
                    <fa-icon icon="fa-solid fa-chevron-right"></fa-icon>
                </a>

                <a class="card-link-share" :href="igShare" target="_blank" rel="noopener noreferrer">
                    <fa-icon class="box ig-brand" icon="fa-brands fa-instagram" />
                    <p>Share via Instagram</p>
                    <fa-icon icon="fa-solid fa-chevron-right"></fa-icon>
                </a>

                <a class="card-link-share" :href="msnShare" target="_blank" rel="noopener noreferrer">
                    <fa-icon class="box msn-brand" icon="fa-brands fa-facebook-messenger" />
                    <p>Share via Messenger</p>
                    <fa-icon icon="fa-solid fa-chevron-right"></fa-icon>
                </a>

                <a class="card-link-share" :href="emShare" target="_blank" rel="noopener noreferrer">
                    <fa-icon class="box em-brand" icon="fa-solid fa-envelope" />
                    <p>Share via Email</p>
                    <fa-icon icon="fa-solid fa-chevron-right"></fa-icon>
                </a>

                <div class="card-link-copy" @click.prevent="onCopy()">
                    <img width="20" height="20" src="/logo.png" />
                    <p id="copyTextEl">hr-webdev.com/channels</p>
                    <div>
                        <fa-icon class="copy-icon" icon="fa-solid fa-copy" />
                        {{ copyTxt }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShareComponent',
    data() {
        return {
            show: false,
            copyTxt: 'Copy',
            fbShare: 'https://www.facebook.com/sharer/sharer.php?u=https://www.hr-webdev.com',
            twShare: 'https://twitter.com/intent/tweet?text=Check%20out%20this%20Link%20-%20https://www.hr-webdev.com',
            inShare: 'https://www.linkedin.com/sharing/share-offsite/?url=https://www.hr-webdev.com',
            igShare: 'https://www.instagram.com/direct/new',
            waShare: 'https://web.whatsapp.com/send?text=Check+out+this+Link%21+-+https://www.hr-webdev.com',
            msnShare: 'https://www.messenger.com/new',
            emShare: 'mailto:?subject=Hey%20check%20this%20out&body=https://www.hr-webdev.com',
            copyShare: 'https://hr-webdev.com/channels'
        };
    },
    methods: {
        onCopy() {
            const copyTextEl = document.getElementById('copyTextEl');
            const range = document.createRange();
            const defaultLink = copyTextEl.textContent;

            // Add secure link
            copyTextEl.textContent = `https://${defaultLink}`;
            range.selectNode(copyTextEl);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand('copy');
            // Set back to default link
            copyTextEl.textContent = defaultLink;
            window.getSelection().removeAllRanges();

            this.copyTxt = 'Copied!';
            setTimeout(() => {
                this.copyTxt = 'Copy';
            }, 3000);
        }
    }
};
</script>

<style scoped>
.float-container {
    position: fixed;
    top: 2rem;
    right: calc(100vw - 90% - 1rem);
    z-index: 99;
}

.share-btn {
    padding: 0.5rem 0.5rem;
    font-size: 1rem;
    border-radius: 50%;
    background: var(--bg-color);
    box-shadow: 3px 3px 7px var(--box-shadow-top-color),
        -3px -3px 7px var(--box-shadow-bottom-color);
}

.share-btn:hover {
    background-color: var(--bg-color);
    color: var(--font-color);
    transition: all 0.3s ease-in-out;
}

.dialog-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
}

.dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 350px;
    background-color: #f1f1f1;
    border-radius: 0.5rem;
    padding: 0 1rem 1rem;
    margin: 0;
}

.dialog-header {
    position: relative;
    color: #2c3e50;
}

.dialog-body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
}

.close-btn {
    position: absolute;
    top: 0;
    right: 0.5rem;
    color: #2c3e50;
    font-size: 1rem;
    cursor: pointer;
}

.close-btn:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
}

.dialog-body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
}

.card-link-share,
.card-link-copy {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #323232;
    padding: 0 0.5rem;
    margin: 0;
    text-decoration: none;
}

.card-link-copy {
    border-radius: 0.25rem;
    background: #f1f1f1;
    box-shadow: 0.25rem 0.25rem 0.5rem #bebebe, -0.25rem -0.25rem 0.5rem #ffffff;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}

.card-link-copy:hover {
    background-color: #e0e0e0;
}

.fb-icon {
    color: rgb(24, 119, 242);
}

.card-link-share:hover {
    border-radius: 0.25rem;
    background: #e0e0e0;
    box-shadow: 0.25rem 0.25rem 0.5rem #bebebe, -0.25rem -0.25rem 0.5rem #ffffff;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}

.box {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 0.25rem;
    padding: 0.4rem;
    color: #f1f1f1;
}

.fb-brand {
    background-color: rgb(24, 119, 242);
}

.in-brand {
    background-color: rgb(0, 119, 181);
}

.tw-brand {
    background-color: rgb(29, 161, 242);
}

.wa-brand {
    background-color: rgb(37, 211, 102);
}

.msn-brand {
    background-color: rgb(0, 132, 255);
}

.em-brand {
    background-color: #636363;
}

.ig-brand {
    background-color: #e1306c;
}

.copy-icon {
    color: #636363;
}
</style>
