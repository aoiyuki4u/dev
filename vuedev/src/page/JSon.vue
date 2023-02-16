<template>
	<div>
		<h2>jSon fetch Page</h2>		
		<div id="jsonWrap">
			<div class="wrap_swiper_cont">
				<swiper :options="swiperOption">
					<swiper-slide v-for="item in data" :key="item.code">
						<div class="category_img" :id="item.postId">
							<img :src="'../static'+item.img" />
							<h3>{{item.tit}}</h3>
							<p>{{item.description}}</p>
							<!-- <p>{{item.modal.tit}}</p>
							<p>{{item.modal.type}}</p>
							<p>{{item.modal.pcLink}}</p>
							<p>{{item.modal.alt}}</p>
							<p>{{item.modal.script}}</p> -->
						</div>
					</swiper-slide>
				</swiper>
			</div>
		</div>
	</div>
</template>
<style lange="scss">
/* @import "style/scss/main.scss"; */
</style>
<script>
// import "@/assets/scss/main.scss";
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
	data(){
        return{
            data:[],
			swiperOption: {
				slidesPerView: 3,
			}
        };
    },
	methods: {
		getJsonFetch(){
			fetch('http://localhost:5000/posts1')
			.then(response => response.json())
			.then(data => this.data = data)
			// .then(data => console.log(this.data))
			.catch(error => console.log('fetch error!!!'));
		}
	},
    beforeCreate(){
        console.log('beforeCreate');		
    },
    created(){
        console.log('created');
		
    },
    beforeMount(){
        console.log('beforeMount');
		this.getJsonFetch();
    },
    mounted(){
        console.log('mounted');		
    },
	components: { swiper, swiperSlide },
	computed: {
		
	},
    beforeUpdate(){
        console.log('beforeUpdate');
    },
    updated(){
        console.log('updated');
    },
    beforeDestroy(){
        console.log('beforeDestroy');
    },
    destroyed(){
        console.log('destroyed');
    },
};
</script>