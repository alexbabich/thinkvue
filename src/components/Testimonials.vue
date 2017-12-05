<template>
    <b-container class="text-center pt-5 pb-5">
        <p class="th-block-title">Отзывы</p>
        <ul class="list-unstyled row th-testimonial-list">
            <li v-for="testimonial in testimonialsList" :key="testimonial.id" class="col-8 col-md-6 m-auto th-testimonial-item">
                <img v-if="testimonial.img" class="rounded-circle mb-4 th-user-photo" :src="testimonial.img" :alt="testimonial.user"/>
                <span v-else class="rounded-circle mb-4 th-user-photo th-default-photo"></span>
                <p class="th-testimonial-title">{{testimonial.user}}</p>
                <p class="th-testimonial-text">{{testimonial.text}}</p>
            </li>
        </ul>
    </b-container>
</template>

<script>
  export default {
    name: 'Testimonials',
    data () {
      return {
        testimonialsList: [
          {
            img: './static/img/user.jpg',
            user: 'Александр Николаенко, со-основатель суши бара Shifu',
            text: 'Используя приложение Shifu удалось увеличить прибыль на 25% в течении первого месяца. Ежедневно приложение используют более 100 клиентов. Общий обьем заказов через приложение составляет около 30%.'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
    .th-user-photo {
        height: 131px;
        width: 131px;
        border: 4px solid #fff;
        box-shadow: 5px 5px 29px 2px #f0f0f0;
        &.th-default-photo {
            background: url("../assets/img/default-user-photo.png") no-repeat;
            display: block;
            background-size: contain;
            margin: auto;
        }
    }
</style>
