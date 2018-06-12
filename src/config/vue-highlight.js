import hljs from 'highlight.js';

let Highlight = {};
Highlight.install = function (Vue) {
	Vue.directive('highlight', {
		inserted: (el) => {
			let block = el;
			if (block) {
				let keys = Object.keys(block.dataset);
				if (keys.length) {
					el.innerText = block.innerText.replace(/ data-v-.*?=""/gm, '');
				} else {
					el.innerText = block.innerText;
				}

				hljs.highlightBlock(el);
			}
		}
	});
};
export default Highlight;