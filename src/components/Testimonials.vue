<template>
    <b-container class="text-center">
        <p class="th-block-title">Отзывы</p>
        <ul class="list-unstyled row th-testimonial-list">
            <li v-for="testimonial in testimonialsList" class="col-12 th-testimonial-item">
                <!--TODO  local image can not to use on testimonials.img and on current way we can not to use alt with default photo-->
                <!--<img v-if="testimonial.img" :class="testimonial.img ? 'th-testimonial-photo th-user-photo' : 'th-testimonial-photo th-default-photo'" :src="testimonial.img"/>-->

                <div v-if="testimonial.img">
                    <img class="th-testimonial-photo th-user-photo" :src="testimonial.img"/>
                </div>
                <div v-else>
                    <img class="th-testimonial-photo th-user-photo" src="../assets/default-user-photo.png"/>
                </div>

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
          { img: '', user: 'Ali Sayed, Zendesk Corp', text: 'Используя приложение Shifu удалось увеличить прибыль на 25% в течении первого месяца. Ежедневно приложение используют более 100 клиентов. Общий обьем заказов через приложение составляет около 30%.' }
        ]
      }
    }
  }
</script>

<style lang="scss">
    .th-testimonial-photo {
        height: 131px;
        width: 131px;
        border: 4px solid #fff;
        border-radius: 50%;
        box-shadow: 5px 5px 29px 2px #f0f0f0;
    }
</style>
