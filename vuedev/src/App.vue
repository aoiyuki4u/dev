<template>
    <div id="app">
        <!-- <img src="../static/img/logo.png"> -->
        <p>그는 로고 였었다...</p>
        <div>
            <ul>
                <li><a href="http://localhost:5000/" target="_blank">jSon Server</a></li>
            </ul>
            <router-link to='/'>HelloWorld.vue</router-link> /
            <router-link to='/jSon'>jSon.vue</router-link> /
            <router-link to='/jSonImport'>JSonImport.vue</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
h1,h2 {
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
}
</style>
