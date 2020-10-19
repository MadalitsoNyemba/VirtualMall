<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Virtual Mall</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0"
          >Navigation</md-toolbar
        >

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text"
              ><router-link to="/">Home</router-link>
            </span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text"
              ><router-link to="/about">About</router-link></span
            >
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          quibusdam, non molestias et! Earum magnam, similique, quo recusandae
          placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
          explicabo, neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          quibusdam, non molestias et! Earum magnam, similique, quo recusandae
          placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
          explicabo, neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          quibusdam, non molestias et! Earum magnam, similique, quo recusandae
          placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
          explicabo, neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          quibusdam, non molestias et! Earum magnam, similique, quo recusandae
          placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
          explicabo, neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          quibusdam, non molestias et! Earum magnam, similique, quo recusandae
          placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
          explicabo, neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          quibusdam, non molestias et! Earum magnam, similique, quo recusandae
          placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
          explicabo, neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          quibusdam, non molestias et! Earum magnam, similique, quo recusandae
          placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
          explicabo, neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          quibusdam, non molestias et! Earum magnam, similique, quo recusandae
          placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
          explicabo, neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          quibusdam, non molestias et! Earum magnam, similique, quo recusandae
          placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
          explicabo, neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          quibusdam, non molestias et! Earum magnam, similique, quo recusandae
          placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
          explicabo, neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          quibusdam, non molestias et! Earum magnam, similique, quo recusandae
          placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
          explicabo, neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          quibusdam, non molestias et! Earum magnam, similique, quo recusandae
          placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
          explicabo, neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          quibusdam, non molestias et! Earum magnam, similique, quo recusandae
          placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
          explicabo, neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          quibusdam, non molestias et! Earum magnam, similique, quo recusandae
          placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
          explicabo, neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          quibusdam, non molestias et! Earum magnam, similique, quo recusandae
          placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
          explicabo, neque.
        </p>

        <Footer />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "MainLayout",
  props: {
    msg: String
  },
  components: {
    Footer
  },
  data: () => ({
    menuVisible: false
  })
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
a {
  color: #42b983;
}
</style>
