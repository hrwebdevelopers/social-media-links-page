<template>
  <div class="theme-switch-wrapper">
    <label class="theme-switch" for="checkbox">
      <input type="checkbox" id="checkbox" @change="switchTheme($event)" />
      <div class="slider round"></div>
    </label>
    <em>{{ theme }}</em>
  </div>
</template>

<script>
export default {
  name: 'ThemeToggleComponent',
  data() {
    return {
      theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
    };
  },
  methods: {
    switchTheme(e) {
      const toggleInput = document.getElementById('checkbox');
      const isDark = e?.target.checked || toggleInput?.checked;
      if (isDark) {
        this.theme = 'dark';
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
      else {
        this.theme = 'light';
        document.documentElement.setAttribute('data-theme', this.theme);
      }
    }
  },
  async created() {
    this.switchTheme();
  }
};
</script>

<style>
/* BACKGROUND */

.theme-switch-wrapper {
  position: fixed ;
  align-items: center;
  top: 1.5rem;
  height: 2rem;
  right: calc(100vw - 10% - 2rem);
}

.theme-switch-wrapper em {
  /* margin-left: 10px; */
  position: absolute;
  top: -1.125rem;
  left: 1rem;
  /* font-size: 1rem; */
}

.theme-switch {
  display: inline-block;
  /* height: 34px; */
  height: 2rem;
  position: relative;
  width: 60px;
}

.theme-switch input {
  display: none;
}

.slider {
  background-color: var(--bg-color);
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;
}

.slider:before {
  background-color: var(--font-color);
  bottom: 4px;
  content: "";
  height: 26px;
  left: 4px;
  position: absolute;
  transition: .4s;
  width: 26px;
}

input:checked+.slider {
  background-color: var(--bg-color)
}

input:checked+.slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 50px;
  background: var(--bg-color);
  box-shadow: 3px 3px 7px var(--box-shadow-top-color),
      -3px -3px 7px var(--box-shadow-bottom-color);
}

.slider.round:hover {
  background: var(--bg-color);
}

.slider.round:before {
  border-radius: 50%;
}

/* BACKGROUND */
</style>
