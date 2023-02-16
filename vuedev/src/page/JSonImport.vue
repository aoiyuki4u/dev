<template>
	<div>
		<h2>jSon Import</h2>
		<div>
			<ul>
				<li class="prod" v-for="item in jsonDatas" :key="item.code">
					<div class="category_img" :id="item.postId">
						<img :src="item.img" />
						<h3>{{ item.tit }}</h3>
						<p>{{item.modal.tit}}</p>
						<p>{{item.modal.type}}</p>
						<p>{{item.modal.pcLink}}</p>
						<p>{{item.modal.alt}}</p>
						<p>{{item.modal.script}}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import jsonData from "../../json/db.json";

export default {
	computed: {
		jsonDatas() {
			return jsonData["posts1"].map((items) => {
				return items;
			});
		},
	},
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1,h2 {
	font-weight:normal;
}
ul {
	list-style-type:none;
	padding:0;
}
li {
	display:inline-block;
	margin:0 10px;
}
a {
	color: #42b983;
} */
</style>