/**
 * 
 * @param {string} type 'facebook' || 'twitter' || 'linkedin'
 * @param {string} title 
 * @param {string} text 
 * @param {string} source 
 */
const share = (type, title = "", text = "", source = null, url = null) =>
{
	const typeExists = ['facebook', 'twitter', 'linkedin'].indexOf(type);
	if(typeExists < 0) throw new Error('This type does not exist.');

	if(!url) url = window.location.href;

	url = encodeURIComponent(url);
	text = encodeURIComponent(text);
	title = encodeURIComponent(title);

	if(!source) source = window.location.origin;
	source = encodeURIComponent(source);
	
	let finalURI;
	let width, height;

	switch(type)
	{
		case 'facebook':
			width = 650;
			height = 450;
			finalURI = `http://www.facebook.com/sharer.php?u=${url}&t=${text}`;
			break;

		case 'twitter':
			width = 650;
			height = 256;
			finalURI = `http://twitter.com/share?url=${url}&text=${text}`;
			break;

		case 'linkedin':
			width = 650;
			height = 450;
			finalURI = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${text}&source=${source}`;
			break;
	}

	const top = (window.screen.height * 0.5) - ((height * 0.5) + 50);
	const left = (window.screen.width * 0.5) - ((width * 0.5) + 10);

	const windowFeatures = `status=no,height=${height},width=${width},resizable=yes,left=${left},top=${top},screenX=${left},screenY=${top},toolbar=no,menubar=no,scrollbars=no,location=no,directories=no`;
	window.open(finalURI, 'Sharer', windowFeatures);
}

export default share;