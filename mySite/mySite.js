// Set brand variables
const websiteHeadData = {
	// Misc. Head Tags
	title:  'website title tag',
	description:  'website meta description tag',
	keywords:  'keywords meta tag',
	baseUrl:  'baseeeeeeeeeeeeeeeeeeeee',
	googleFonts:  'Roboto',
	canonicalUrl:  'canonical url',
	robots:  'robots meta tag',
	viewport:  'width=device-width, initial-scale=1',
	themeColor:  'theme color meta tag',
	// HTTP EQUIV Meta Tags
	httpEquiv: {
		ContentType:  'text/html; charset=utf-8',
		ContentLanguage:  'en-US',
		XUACompatible:  'IE=edge,chrome=1'
	},
	// Article Meta Tags
	article: {
		publisher:  'article published time',
		modifiedTime:  'article modified time',
	},
	//  Rel Icons
	icons: {
		icon16: '16x16 icon',
		icon32:  '32x32 favicon',
		icon96:  '96x96 favicon',
		icon192:  '192x192 favicon',
	},
	// Open Graph Meta Tags
	og: {
		ogTitle:  'og:title',
		ogDescription:  'og:description',
		ogImage:  'og:image',
		ogImageWidth:  'og:image:width',
		ogImageHeight:  'og:image:height',
		ogImageAlt:  'og:image:alt',
		ogUrl:  'og:url',
		ogType:  'og:type',
		ogLocale:  'og:locale',
		ogSiteName:  'og:site_name',

	},
	// Twitter Meta Tags
	twitter: {
		twitterCard:  'twitter:card',
		twitterSite:  'twitter:site',
		twitterCreator:  'twitter:creator',
		twitterTitle:  'twitter:title',
		twitterDescription:  'twitter:description',
		twitterImage:  'twitter:image',
		twitterImageAlt:  'twitter:image:alt'
	},
	// Random Variables Used in Schema Markup
	brandTradeName: 'brand trade name',
	brandLegalName: 'brand legal name',
	logo:  'logo',
	brandFacebookUrl: 'facebook url',
	brandInstagramUrl: 'instagram url',
	brandLinkedinUrl: 'linkedin url',
	brandTwitterUrl: 'twitter url',
	brandTiktokUrl: 'tiktok url',
	brandYoutubeUrl: 'youtube url',
	brandPhone: 'phone number',
	brandEmail: 'email address',
	brandAddress: {
		street: 'street address',
		city: 'city',
		state: 'state',
		zip: 'zip code',
		country: 'country'
	}
};

// Schema Markup
const schemaMarkup  = {
	'@context': 'https://schema.org',
	'@graph:': [
		{
			'@type': 'Website',
			'@id': websiteHeadData.baseUrl + '/#website',
			'url': websiteHeadData.baseUrl,
			'name': websiteHeadData.title,
			'description': websiteHeadData.description,
			'inLanguage': 'en-US',
			'publisher': 'https://brandwield.com/#publisher',
			'image': websiteHeadData.ogImage,
			'logo': websiteHeadData.logo,
			'sameAs': [websiteHeadData.brandFacebookUrl, websiteHeadData.brandInstagramUrl, websiteHeadData.brandLinkedinUrl, websiteHeadData.brandTwitterUrl, websiteHeadData.brandTiktokUrl, websiteHeadData.brandYoutubeUrl],
			'dateModified': websiteHeadData.article.modifiedTime,
		},
		{
			'@type': 'WebPage',
			'@id': websiteHeadData.baseUrl + '/#webpage',
			'url': websiteHeadData.baseUrl,
			'name': websiteHeadData.title,
			'isPartOf': websiteHeadData.baseUrl + '/#website',
			'inLanguage': 'en-US',
			'publisher': 'https://brandwield.com/#publisher',
			'image': websiteHeadData.ogImage,
			'logo': websiteHeadData.logo,
			'dateModified': websiteHeadData.article.modifiedTime,
		},
		{
			'@type': 'Organization',
			'@id': websiteHeadData.baseUrl + '/#organization',
			'url': websiteHeadData.baseUrl,
			'name': websiteHeadData.brandTradeName,
			'alternateName': websiteHeadData.brandLegalName,
			'description': websiteHeadData.description,
			'inLanguage': 'en-US',
			'sameAs': [
				websiteHeadData.brandFacebookUrl,
				websiteHeadData.brandInstagramUrl,
				websiteHeadData.brandLinkedinUrl,
				websiteHeadData.brandTwitterUrl,
				websiteHeadData.brandTiktokUrl,
				websiteHeadData.brandYoutubeUrl
			],
			address: {
				'@type': 'postalAddress',
				"@id": websiteHeadData.baseUrl + '/#postaladdress',
				'streetAddress': websiteHeadData.brandAddress.street,
				'addressLocality': websiteHeadData.brandAddress.city,
				'addressRegion': websiteHeadData.brandAddress.state,
				'postalCode': websiteHeadData.brandAddress.zip,
				'addressCountry': websiteHeadData.brandAddress.country,
			}
		},
		{
			'@type': 'LocalBusiness',
			'@id': websiteHeadData.baseUrl + '/#localbusiness',
			'url': websiteHeadData.baseUrl,
			'name': websiteHeadData.brandTradeName,
			'description': websiteHeadData.description,
			'telephone': websiteHeadData.brandPhone,
			'email': websiteHeadData.brandEmail,
			'sameAs': [
				websiteHeadData.brandFacebookUrl,
				websiteHeadData.brandInstagramUrl,
				websiteHeadData.brandLinkedinUrl,
				websiteHeadData.brandTwitterUrl,
				websiteHeadData.brandTiktokUrl,
				websiteHeadData.brandYoutubeUrl
			],
			address: {
				'@type': 'postalAddress',
				"@id": websiteHeadData.baseUrl + '/#postaladdress',
				'streetAddress': websiteHeadData.brandAddress.street,
				'addressLocality': websiteHeadData.brandAddress.city,
				'addressRegion': websiteHeadData.brandAddress.state,
				'postalCode': websiteHeadData.brandAddress.zip,
				'addressCountry': websiteHeadData.brandAddress.country,
			}
		},
		{
			'@type': 'Brand',
			'@id': websiteHeadData.baseUrl + '/#brand',
			'url': websiteHeadData.baseUrl,
			'name': websiteHeadData.brandTradeName,
			'description': websiteHeadData.description,
			'inLanguage': 'en-US',
			'publisher': websiteHeadData.baseUrl + '/#publisher',
			'logo': websiteHeadData.logo,
			'sameAs': [
				websiteHeadData.brandFacebookUrl,
				websiteHeadData.brandInstagramUrl,
				websiteHeadData.brandLinkedinUrl,
				websiteHeadData.brandTwitterUrl,
				websiteHeadData.brandTiktokUrl,
				websiteHeadData.brandYoutubeUrl
			],
			address: {
				'@type': 'postalAddress',
				"@id": websiteHeadData.baseUrl + '/#postaladdress',
				'streetAddress': websiteHeadData.brandAddress.street,
				'addressLocality': websiteHeadData.brandAddress.city,
				'addressRegion': websiteHeadData.brandAddress.state,
				'postalCode': websiteHeadData.brandAddress.zip,
				'addressCountry': websiteHeadData.brandAddress.country,
			}
		},
		{
			'@type': 'Logo',
			'@id': websiteHeadData.baseUrl + '/#logo',
			'name': websiteHeadData.brandTradeName + ' Logo',
			'url': websiteHeadData.logo,
			'caption': websiteHeadData.brandTradeName + ' Logo',
			'inLanguage': 'en-US',
			'logoOfPage': websiteHeadData.baseUrl + '/#website',
		},
		{
			'@type': 'OfferCatalog',
			'@id': websiteHeadData.baseUrl + '/#offercatalog',
			'name': websiteHeadData.brandTradeName + ' Offer Catalog',
			'url': websiteHeadData.baseUrl,
			'description': websiteHeadData.description,
		}
	]
};

// CSS
const css = {
	colors: {
		primaryColor: '#f36a6a',
		secondaryColor: '#7c9cef',
		tertiaryColor: '#78ea7a'
	},
	fonts: {
		primaryFont: 'Montserrat',
		secondaryFont: 'Roboto Slab'
	}
}

// Misc. Head Tags
document.head.innerHTML += '<!-- Misc. Head Tags --><title>' + websiteHeadData.title + '</title>'
document.head.innerHTML += '<meta name="description" content="' + websiteHeadData.description + '">'
document.head.innerHTML += '<meta name="keywords" content="' + websiteHeadData.keywords + '">'
document.head.innerHTML += '<base href="' + websiteHeadData.baseUrl + '">'
document.head.innerHTML += '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=' + websiteHeadData.googleFonts + ':wght@400&display=swap' + '">'
document.head.innerHTML += '<link rel="canonical" href="' + websiteHeadData.canonicalUrl + '">'
document.head.innerHTML += '<meta name="robots" content="' + websiteHeadData.robots + '">'
document.head.innerHTML += '<meta name="viewport" content="' + websiteHeadData.viewport + '">'
document.head.innerHTML += '<meta name="theme-color" content="' + websiteHeadData.themeColor + '">'

// HTTP EQUIV Meta Tags
document.head.innerHTML += '<!-- HTTP EQUIV Meta Tags--><meta http-equiv="Content-Type" content="' + websiteHeadData.httpEquiv.ContentType + '"/>'
document.head.innerHTML += '<meta http-equiv="Content-Language" content="' + websiteHeadData.httpEquiv.ContentLanguage + '"/>'
document.head.innerHTML += '<meta http-equiv="X-UA-Compatible" content="' + websiteHeadData.httpEquiv.XUACompatible + '"/>'

// Article Meta Tags
document.head.innerHTML += '<!-- Article Meta Tags--><meta property="article:publisher" content="' + websiteHeadData.article.publisher + '" />'
document.head.innerHTML += '<meta property="article:modified_time" content="' + websiteHeadData.article.modifiedTime + '" />'

//  Rel Icons
document.head.innerHTML += '<!-- Rel Icons Tags --><link rel="icon" sizes="16x16" type="image/png" href="' + websiteHeadData.icons.icon16 + '">'
document.head.innerHTML += '<link rel="icon" sizes="32x32" type="image/png" href="' + websiteHeadData.icons.icon32 + '">'
document.head.innerHTML += '<link rel="icon" sizes="96x96" type="image/png" href="' + websiteHeadData.icons.icon96 + '">'
document.head.innerHTML += '<link rel="icon" sizes="192x192" type="image/png" href="' + websiteHeadData.icons.icon192 + '">'

// Open Graph Meta Tags
document.head.innerHTML += '<!-- Open Graph Meta Tags --><meta property="og:title" content="' + websiteHeadData.og.ogTitle + '">'
document.head.innerHTML += '<meta property="og:description" content="' + websiteHeadData.og.ogDescription + '">'
document.head.innerHTML += '<meta property="og:url" content="' + websiteHeadData.og.ogUrl + '">'
document.head.innerHTML += '<meta property="og:image" content="' + websiteHeadData.og.ogImage + '">'
document.head.innerHTML += '<meta property="og:image:alt" content="' + websiteHeadData.ogImageAlt + '">'
document.head.innerHTML += '<meta property="og:image:width" content="' + websiteHeadData.og.ogImageWidth + '">'
document.head.innerHTML += '<meta property="og:image:height" content="' + websiteHeadData.og.ogImageHeight + '">'
document.head.innerHTML += '<meta property="og:type" content="' + websiteHeadData.og.ogType + '">'
document.head.innerHTML += '<meta property="og:locale" content="' + websiteHeadData.og.ogLocale + '">'
document.head.innerHTML += '<meta property="og:site_name" content="' + websiteHeadData.og.ogSiteName + '">'

// Twitter Meta Tags
document.head.innerHTML += '<!-- Twitter Meta Tags --><meta name="twitter:card" content="' + websiteHeadData.twitter.twitterCard + '">'
document.head.innerHTML += '<meta name="twitter:site" content="' + websiteHeadData.twitter.twitterSite + '">'
document.head.innerHTML += '<meta name="twitter:creator" content="' + websiteHeadData.twitter.twitterCreator + '">'
document.head.innerHTML += '<meta name="twitter:title" content="' + websiteHeadData.twitter.twitterTitle + '">'
document.head.innerHTML += '<meta name="twitter:description" content="' + websiteHeadData.twitter.twitterDescription + '">'
document.head.innerHTML += '<meta name="twitter:image" content="' + websiteHeadData.twitter.twitterImage + '">'
document.head.innerHTML += '<meta name="twitter:image:alt" content="' + websiteHeadData.twitter.twitterImageAlt + '">'

// Add the complete schema markup code above to the <head> of the page
document.head.innerHTML += '<!-- Schema Markup JSON --><script type="application/ld+json">' + JSON.stringify(schemaMarkup) + '</script>'

// CSS Variables
document.documentElement.style.setProperty('--primaryColor', css.colors.primaryColor);
document.documentElement.style.setProperty('--secondaryColor', css.colors.secondaryColor);
document.documentElement.style.setProperty('--tertiaryColor', css.colors.tertiaryColor);

document.documentElement.style.setProperty('--primaryFont', css.fonts.primaryFont);
document.documentElement.style.setProperty('--secondaryFont', css.fonts.secondaryFont);