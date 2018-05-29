<template>
	<i class="ici-icon" @click="$emit('click')" :class="name" :style="style"></i>
</template>

<script>
	export default {
		name: "ici-icon",
		computed: {
			style() {
				return {
					fontSize: this.size,
					color: this.color
				}
			}
		},
		props: {
			name: {
				type: String,
				default: ''
			},
			size: {
				type: String,
				default: 'inherit'
			},
			color: {
				type: String,
				default: 'inherit'
			}
		}
	}
</script>

<style scoped>

	@font-face {font-family: "ici-icon";
		src: url('//at.alicdn.com/t/font_589373_h3gfg33pzpgjsjor.eot?t=1527566482084'); /* IE9*/
		src: url('//at.alicdn.com/t/font_589373_h3gfg33pzpgjsjor.eot?t=1527566482084#iefix') format('embedded-opentype'), /* IE6-IE8 */
		url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
		url('//at.alicdn.com/t/font_589373_h3gfg33pzpgjsjor.ttf?t=1527566482084') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
		url('//at.alicdn.com/t/font_589373_h3gfg33pzpgjsjor.svg?t=1527566482084#iconfont') format('svg'); /* iOS 4.1- */
	}

	.ici-icon {
		font-family:"ici-icon" !important;
		font-style:normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-weizhi:before { content: "\e601"; }

	.icon-msnui-caller:before { content: "\e624"; }

	.icon-telephone:before { content: "\e645"; }

	.icon-skype:before { content: "\e787"; }

	.icon-htmal5icon18:before { content: "\e636"; }

	.icon-gengxin:before { content: "\e668"; }

	.icon-twitter2:before { content: "\e821"; }

	.icon-shanchudelete30:before { content: "\e70a"; }

	.icon-icon2:before { content: "\e62a"; }

	.icon-yduigerenzhongxin:before { content: "\e68a"; }

	.icon-yduigouxuan:before { content: "\e68b"; }

	.icon-email:before { content: "\e7e3"; }

	.icon-wechat:before { content: "\e629"; }

	.icon-ego-menu:before { content: "\e605"; }

	.icon-yduifanhui:before { content: "\e700"; }

	.icon-yduiqianjin:before { content: "\e701"; }

	.icon-ai238:before { content: "\e6e2"; }

	.icon-qq:before { content: "\e603"; }

	.icon-tianjia:before { content: "\e634"; }

	.icon-iconfontzhizuobiaozhun023113:before { content: "\e673"; }

	.icon-gongsixinxi1:before { content: "\e630"; }

	.icon-google_plus:before { content: "\e602"; }

	.icon-social-linkedin:before { content: "\e60c"; }

	.icon-guanbi:before { content: "\e611"; }

	.icon-quanqiu:before { content: "\e663"; }

	.icon-link:before { content: "\e702"; }

	.icon-remove_link:before { content: "\e717"; }

	.icon-Versionupdaterule-copy:before { content: "\e621"; }

	.icon-erweima:before { content: "\e7c1"; }

	.icon-zhongguoditu:before { content: "\e62e"; }

	.icon-youxiang1:before { content: "\e68c"; }

	.icon-Cisco:before { content: "\e61a"; }

	.icon-wushuju:before { content: "\e642"; }

	.icon-yonghu:before { content: "\e60a"; }

	.icon-quanbu:before { content: "\e783"; }

	.icon-renxiang:before { content: "\e686"; }

	.icon-Facebook:before { content: "\e600"; }

	.icon-icon-test:before { content: "\e60d"; }

	.icon-huifu:before { content: "\e639"; }

	.icon-huishouzhan:before { content: "\e625"; }

	.icon-sousuo:before { content: "\e6bc"; }

	.icon-bom:before { content: "\e60e"; }

	.icon-whois:before { content: "\e610"; }


</style>