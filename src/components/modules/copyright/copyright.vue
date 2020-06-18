<template>
	<div class="test-wrap">
		<div class="footer-links" >
			<router-link tag="a" target="_blank" to="/" v-for="(itme,index) in data.list" :key="index">
		  	{{itme.name}}
			</router-link>
		</div>
		{{data.componentName}}
	</div>
</template>

<script lang="ts">
	import { Component, Vue, Prop } from "vue-property-decorator"
	import { Getter, Action } from 'vuex-class'
	import { TestData } from '@/types/components/test.interface'
	// import {  } from "@/components" // 组件

	@Component({})
	export default class CopyRight extends Vue {
		// prop
		@Prop({
			required: false,
			default: ''
		}) name!: string

		// data
		data: TestData = {
			componentName: 'Copyright© 2013-2018 九牧厨卫股份有限公司 版权所有 保留一切权利 闽ICP备11009004号-1',
			list: [{
				name: '关于我们'
			}, {
				name: '联系我们'
			}, {
				name: '商家入驻'
			}, {
				name: '服务宗旨'
			}, {
				name: '帮助中心'
			}]
		}

		created() {
			//
		}

		activated() {
			//
		}

		mounted() {
			//
		}

	}
</script>

<style lang="scss">
	@import "@/assets/scss/variables.scss";

	.test-wrap {
		padding: 25px 0 40px;
		width: 100%;
		text-align: center;
		color: #9a9a9a;
	}
	.footer-links{
		margin-bottom: 8px;
	}
	.footer-links a{
		color: #9a9a9a;
	}
	.footer-links a:not(:last-child) {
    position: relative;
    margin-right: 20px;
	}
	.footer-links a:not(:last-child):after {
    position: absolute;
    content: " ";
    background: #9f9f9f;
    width: 1px;
    top: 0;
    bottom: 0;
    right: -10px;
}

</style>

