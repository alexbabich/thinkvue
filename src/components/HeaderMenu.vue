<template>
    <b-container>
        <b-nav fill>
            <b-nav-item v-bind:key="todo.text" v-for="todo in todos">
                {{todo.text}}
            </b-nav-item>
        </b-nav>
    </b-container>
</template>

<script>
  export default {
    name: 'HeaderMenu',
    data () {
      return {
        todos: [
          { text: 'Treetopers' },
          { text: 'ПРЕИМУЩЕСТВА' },
          { text: 'цена' },
          { text: 'результат внедрения ' },
          { text: 'почему именно приложения?' }
        ]
      }
    }
  }
</script>

<style lang="scss">
    .nav {
        text-align: center;
        position: relative;
        z-index: 3;
        padding: 60px 0;
        li {
            font-weight: normal;
            margin: 0 25px;
            a {
                padding: 0 25px;
                color: #fff;
                text-transform: uppercase;
                &:hover {
                    color: #f3f3f3;
                    text-decoration: none;
                    text-shadow: 1px 1px 2px black
                }
            }
        }
    }
</style>
