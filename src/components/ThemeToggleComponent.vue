<template>
  <!-- <div class="theme-switch-wrapper">
    <div class="theme-switch" @click="toggleTheme">
      <input type="checkbox" id="checkbox" />
      <label for="checkbox"></label>
    </div>
    <em>{{ theme }}</em>
  </div> -->

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
      theme: localStorage.getItem('theme') || 'light',
    };
  },
  methods: {
    switchTheme(e) {
      console.log('AQUI');
      // const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
      if (e.target.checked) {
        this.theme = 'dark';
        document.documentElement.setAttribute('data-theme', this.theme);
      }
      else {
        this.theme = 'light';
        document.documentElement.setAttribute('data-theme', this.theme);
      }
      localStorage.setItem('theme', this.theme);
    }
  }
};
</script>

<style>
/* BACKGROUND */

.theme-switch-wrapper {
  display: flex;
  align-items: center;
}

.theme-switch-wrapper em {
  margin-left: 10px;
  font-size: 1rem;
}

.theme-switch {
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
}

.theme-switch input {
  display: none;
}

.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;
}

.slider:before {
  background-color: #fff;
  bottom: 4px;
  content: "";
  height: 26px;
  left: 4px;
  position: absolute;
  transition: .4s;
  width: 26px;
}

input:checked+.slider {
  background-color: #66bb6a;
}

input:checked+.slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

/* BACKGROUND */
</style>
