<template>
	<div>
		<h2>jSon fetch Page</h2>		
		<div id="jsonWrap">
		</div>
		<!-- <swiper ref="filterSwiper" :options="swiperOption" role="tablist">
			<swiper-slide role="tab">111111</swiper-slide>
			<swiper-slide role="tab">222222</swiper-slide>
			<swiper-slide role="tab">333333</swiper-slide>
			<swiper-slide role="tab">444444</swiper-slide>
			<swiper-slide role="tab">555555</swiper-slide>
			<swiper-slide role="tab">666666</swiper-slide>
			<swiper-slide role="tab">777777</swiper-slide>
			<swiper-slide role="tab">888888</swiper-slide>
			<swiper-slide role="tab">999999</swiper-slide>
			<swiper-slide role="tab">101010101010</swiper-slide>
			<swiper-slide role="tab">111111111111</swiper-slide>
			<swiper-slide role="tab">121212121212</swiper-slide>
		</swiper> -->
	</div>
</template>
<style lange="scss">
/* @import "../assets/scss/main.scss"; */
/* @import './static/scss/base.scss';
@import './static/scss/main.scss'; */
/* .swiper-wrapper {
	display: flex;
	justify-content: center;
	text-align: center;
	font-weight: bold;
} */
.swiper-wrapper .swiper-slide{
	width: auto;
	min-width: 56px;
	padding: 0px 14px;
	font-size: 14px;
	line-height: 36px;
	text-align: center;
	color: #84868c;
	border: 0;
	border-radius: 18px;
	background: #f3f4f7;
	appearance: none;
	cursor: pointer;
}
.swiper .item .thum{width:200px;height:200px}
.swiper .item .thum img{width:100%;}
</style>
<script>
// const jsonData = require('../../json/db.json');
// console.log(jsonData.posts1);

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'

fetch('http://localhost:5000/posts1')
.then(response => response.json())
// .then(data => console.log(data))
.then(data => jsonData(data))
.catch(error => console.log('error'));

function jsonData(data){
	console.log(data);	
	let dataWrap = document.querySelector("#jsonWrap");
	let parDiv = document.createElement('div');
	let swiper = document.createElement('swiper');
	parDiv.classList.add("box");
	dataWrap.appendChild(parDiv);	
	swiper.classList.add("swiper");	
	swiper.setAttribute(":options", "swiperOption");
	parDiv.appendChild(swiper);
	data.forEach((item)=>{
		// li 노드 생성
		let subDiv = document.createElement('swiper-slide');
		subDiv.classList.add("item");
		subDiv.innerHTML = 
			'<p class="thum"><img src="../static'+item.img+'" alt="" /></p>'
			+'<h3 claas="tit">'+item.tit+'</h3>'
			+'<p class="desc">'+item.description+'</p>';
		swiper.appendChild(subDiv);
	});

	// parent.append(fragment);
	// for(let i = 0; i < data.length; i++){
	// 	let list_html = '<li>'+
	// 			'<img src="'+data[i].img+'" alt="">'+
	// 			'<h3>'+data[i].img+'</h3>'+
	// 			'<p>'+data[i].description+'</p>'+
	// 		'</li>';
	// 	// var liItem = document.createElement("li");
	// 	// liItem.innerHTML = '<p><img src="'+data[i].img+'" alt="" /></p><h3>'+data[i].tit +'</h3><p>'+data[i].description+'</p>';
	//     dataWrap.appendChild(list_html);
	// }
	// jsonWrap.innerHTML = items.map((item) => createHTMLString(item)).json('');
	// data.forEach(function(posts1){
	// 	jsonWrap = /
	// 		<div>
	// 			<ul>
	// 				<li>${posts1.tit}</li>
	// 			</ul>
	// 		</div>
		
	// });
	// jsonWrap.textContent = data.map((item) => item.posts1.tit)
}





export default {
	name: 'FilterSwiper',
	data () {
		console.log('swiper data');
		return {
			swiperOption: {
				slidesPerView: 3,
				spaceBetween: 6,
				slidesOffsetBefore: 0,
				slidesOffsetAfter: 0,
				freeMode: true,
				centerInsufficientSlides: true,
			}
		}
	},
	components: {
		swiper,
		swiperSlide
	},
	// watch:{
    //     input1(){
    //         console.log(this.input1);
    //     },
    //     title(){},
    // },
    // methods:{
    //     getData(){
    //         alert(this.input1);
    //     },
    //     setData(){
    //         this.input1 = 'Hard!!!!!!!!!!';
    //     },
    //     changeRegion(){
    //         alert(this.region)
    //     },
    // },
    beforeCreate(){
        console.log('beforeCreate');
		
    },
    created(){
        console.log('created');		
    },
    beforeMount(){
        console.log('beforeMount');
    },
    mounted(){
        console.log('mounted');
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