<template>
    <b-container>
        <nav>
            <ul class="list-unstyled list-inline">
                <li class="list-inline-item" v-for="todo in todos">
                    <a href="#">{{ todo.text }}</a>
                </li>
            </ul>
        </nav>
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
    nav {
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
