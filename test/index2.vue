<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a
        class="navbar-brand"
        href="#"
      >{{ routeName }}</a>
      <button
        class="navbar-toggler navbar-burger"
        type="button"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-bar" />
        <span class="navbar-toggler-bar" />
        <span class="navbar-toggler-bar" />
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a
              href="#"
              class="nav-link"
            >
              <i class="ti-panel" />
              <p>Stats</p>
            </a>
          </li>

          <li class="nav-item">
            <a
              href="#"
              class="nav-link"
            >
              <i class="ti-settings" />
              <p>
                Settings
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      activeNotifications: false,
    }
  },
  computed: {
    routeName() {
      return this.capitalizeFirstLetter(this.$route.name)
    },
  },
  methods: {
    capitalizeFirstLetter(string) {
      if (!string) {
        return ''
      }
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications
    },
    closeDropDown() {
      this.activeNotifications = false
    },
  },
}
</script>
