console.log("newContent.js loaded");

// Output Content Tabs
function openCity(evt, outputTabName) {
	let i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	tabcontent[i].style.display = "none";
}
	tablinks = document.getElementsByClassName("socialTab");
	for (i = 0; i < tablinks.length; i++) {
	tablinks[i].className = tablinks[i].className.replace(" active", "");
}
	document.getElementById(outputTabName).style.display = "block";
	evt.currentTarget.className += " active";

}

// Screenshot
// Input: <div id="photo"><button onclick="screenshot();">Take Screenshot</button></div>
// Output: <div id="output"></div>
function downloadFinalTextBlob() {

	// Get the content
	let blobHtml =

		`<!DOCTYPE html>
	<html lang="en">
		<head>

		<meta charset="UTF-8">
		<title>BrandWield Saved Content</title>
	<meta name="author" content="BRANDWIELD Inc.">

		<!-- CSS -->
		<style>
			* {

		}
			body {
			padding: 20px 20px 20px 20px;
		}
			.dateAndTime {
			color: #000000;
			text-decoration: underline;
		}
			.legalBusinessName {
			font-weight: bolder;
		}
		</style>

	</head>
	<body>
	<header>
		<h1>BrandWield Saved Content</h1>
	</header>
	<main>
		<section id="savedMedia">
		</section>

		<section id="savedText">
			<p id="savedTextHere" style="width: 300px">
				${document.getElementById("finalText").innerText}
			</p>
		</section>
	</main>
	</body>
</html>`

	// Create a new Blob (html)
	const blob = new Blob([blobHtml], { type: "text/html" });


	// Download the newly created Blob
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = "BrandWiled Content";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);

}
function downloadHorizontalImageFinal() {

	// Set input & output
	let screenshotTakeable = document.getElementById('finalImageHorizontal');
	let screenshotPlaceable = document.getElementById('output');

	// Call the CDN function
	html2canvas(screenshotTakeable).then ( function (canvas) {
		screenshotPlaceable.appendChild(canvas);
		canvas.classList.add('screenshotHorizontal');
		Array.from(document.querySelectorAll('.screenshotHorizontal')).pop();
	});

	// Hide to output, so it doesn't show on the page --> needs to be after the CDN call so it can be appended and captured first
	document.getElementById("output").style.display = "none";

	// Download image files
	setTimeout(function() {
		var canvas = Array.from(document.querySelectorAll('.screenshotHorizontal')).pop();
		var imageData = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream", 1.0);
		var a = document.createElement('a');
		a.href = imageData;
		a.download = 'Horizontal Image';
		a.click();
		// set imageData to localStorage
		localStorage.setItem('latestScreenshotHorizontal', imageData);
	}, 1000);
}
function downloadVerticalImageFinal() {
	// Set input & output
	let screenshotTakeable = document.getElementById('finalImageVertical');
	let screenshotPlaceable = document.getElementById('output');

	// Call the CDN function
	html2canvas(screenshotTakeable).then ( function (canvas) {
		screenshotPlaceable.appendChild(canvas);
		canvas.classList.add('screenshotVertical');
	});

	// Hide to output, so it doesn't show on the page --> needs to be after the CDN call so it can be appended and captured first
	document.getElementById("output").style.display = "none";

	// Download image files
	setTimeout(function() {
		var canvas = Array.from(document.querySelectorAll('.screenshotVertical')).pop();
		var imageData = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream", 1.0);
		var a = document.createElement('a');
		a.href = imageData;
		a.download = 'Vertical Image';
		a.click();
		// set imageData to localStorage
		localStorage.setItem('latestScreenshotVertical', imageData);
	}, 2000);
}
function downloadSquareImageFinal() {


	// Set input & output
	let screenshotTakeable = document.getElementById('finalImageSquare');
	let screenshotPlaceable = document.getElementById('output');

	// Call the CDN function
	html2canvas(screenshotTakeable).then ( function (canvas) {
		screenshotPlaceable.appendChild(canvas);
		canvas.classList.add('screenshotSquare');
	});

	// Hide to output, so it doesn't show on the page --> needs to be after the CDN call so it can be appended and captured first
	document.getElementById("output").style.display = "none";

	// Download image files
	setTimeout(function() {
		// select ALL canvas elements, and for each one, get the dataURL and download it
		var canvas = Array.from(document.querySelectorAll('.screenshotSquare')).pop();
		var imageData = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream", 1.0);
		var a = document.createElement('a');
		a.href = imageData;
		a.download = 'Square Image';
		a.click();
		// set imageData to localStorage
		localStorage.setItem('latestScreenshotSquare', imageData);
	}, 3000);
}
function downloadStoryImageFinal() {
	// Set input & output
	let screenshotTakeable = document.getElementById('finalImageStory');
	let screenshotPlaceable = document.getElementById('output');

	// Call the CDN function
	html2canvas(screenshotTakeable).then ( function (canvas) {
		screenshotPlaceable.appendChild(canvas);
		canvas.classList.add('screenshotStory');
	});

	// Hide to output, so it doesn't show on the page --> needs to be after the CDN call so it can be appended and captured first
	document.getElementById("output").style.display = "none";

	// Download image files
	setTimeout(function() {
		// select ALL canvas elements, and for each one, get the dataURL and download it
		var canvas = Array.from(document.querySelectorAll('.screenshotStory')).pop();
		var imageData = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream", 1.0);
		var a = document.createElement('a');
		a.href = imageData;
		a.download = 'Story Image';
		a.click();
		// set imageData to localStorage
		localStorage.setItem('latestScreenshotStory', imageData);
	}, 4000);
}
function downloadContent() {
	downloadHorizontalImageFinal();
	downloadSquareImageFinal();
	downloadVerticalImageFinal();
	downloadStoryImageFinal();
	downloadFinalTextBlob();
}

// Text Sentiment Analysis API (unlimited free calls)
function eventTitleSentimentAnalysis() {

	// Get the text
	let text = document.getElementById("inputEventTitle").value;

	// Set the API key
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': '0759e0a5f5msh13ea66780939408p189da2jsne987576d688f',
			'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
		},
		body: '{"language":"english","text":"' + text + '"}'
	};

	fetch('https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1', options)
	.then(response => response.json())
	.then(data => {

		if (text.length > 1) {
			document.getElementById("titleSentimentAnalysis").innerText = data.sentiment;
			document.getElementById("titleSentimentAnalysis").style.display = "inline";

			if (data.sentiment == "positive") {
				document.getElementById("titleSentimentAnalysis").style.backgroundColor = "darkgreen";
				document.getElementById("titleSentimentAnalysis").style.color = "white";
			} else if (data.sentiment == "negative") {
				document.getElementById("titleSentimentAnalysis").style.backgroundColor = "darkred"
				document.getElementById("titleSentimentAnalysis").style.color = "white";
			} else if (data.sentiment == "neutral") {
				document.getElementById("titleSentimentAnalysis").style.backgroundColor = "darkblue"
				document.getElementById("titleSentimentAnalysis").style.color = "white";
			}
		}
		else {
			document.getElementById("titleSentimentAnalysis").style.display = "none";
		}
	})
	.catch(err => console.error(err));
}
function eventDescriptionSentimentAnalysis() {

	// Get the text
	let text = document.getElementById("inputEventDescription").value;

	// Set the API key
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': '0759e0a5f5msh13ea66780939408p189da2jsne987576d688f',
			'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
		},
		body: '{"language":"english","text":"' + text + '"}'
	};

	fetch('https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1', options)
	.then(response => response.json())
	.then(data => {

		if (text.length > 1) {
			document.getElementById("descriptionSentimentAnalysis").innerText = data.sentiment;
			document.getElementById("descriptionSentimentAnalysis").style.display = "inline";

			if (data.sentiment == "positive") {
				document.getElementById("descriptionSentimentAnalysis").style.backgroundColor = "darkgreen";
				document.getElementById("descriptionSentimentAnalysis").style.color = "white";
			} else if (data.sentiment == "negative") {
				document.getElementById("descriptionSentimentAnalysis").style.backgroundColor = "darkred"
				document.getElementById("descriptionSentimentAnalysis").style.color = "white";
			} else if (data.sentiment == "neutral") {
				document.getElementById("descriptionSentimentAnalysis").style.backgroundColor = "darkblue"
				document.getElementById("descriptionSentimentAnalysis").style.color = "white";
			}
		}
		else {
			document.getElementById("descriptionSentimentAnalysis").style.display = "none";
		}
	})
	.catch(err => console.error(err));
}

// Text Entity Analysis API (unlimited free calls)
function finalTextEntityAnalysis() {
	let text = document.getElementById("inputEventDescription");
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': '0759e0a5f5msh13ea66780939408p189da2jsne987576d688f',
			'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
		},
		body: '{"language":"english","text":"' + text + '"}'
	};
	fetch('https://text-analysis12.p.rapidapi.com/ner/api/v1.1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}

// Sentence Generator API - SET UP FOR 'EVENT'
function realiseSentence() {

	let object = 'Fairfield Networking Dinner'; // REQ - they are acted upon
	let objnum = 'singular'; // 'singular' or 'plural'
	let objdet = 'the'; // the object determiner (ex: a, an, the) use '-' for auto-generation
	let objmod = 'networking'; //  an adjective of the object (ex: big, small, red)

	let subject = 'you'; // REQ - the doer of the verb
	let subjnum = 'singular'; // 'singular' or 'plural'
	let subjdet = '-'; // the subject determiner (ex: a, an, the) use '-' for auto-generation

	let verb = 'attend'; //  REQ - It's what ya do!
	let tense = 'future'; // 'past', 'present' or 'future'

	let sentencetype = 'whosubj'; // declaration by default

	// let progressive = '';
	// let modal = '';
	// let passive = '';
	// let perfect = '';
	// let negated = '';

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '0759e0a5f5msh13ea66780939408p189da2jsne987576d688f',
			'X-RapidAPI-Host': 'linguatools-sentence-generating.p.rapidapi.com'
		}
	};

	// API DOCS --> https://linguatools.org/language-apis/sentence-generating-api/
	fetch('https://linguatools-sentence-generating.p.rapidapi.com/realise?' +

		'object=' + object + // REQ - any noun or pronoun. If the object is a pronoun set objdet=- and use the base form of the pronoun (e.g. she instead of her). Possible base forms are: I, you, he, she, it, we, they. This will be automatically replaced by me, you, him, her, it, us, them. Set objnum=plural to get the plural forms (e. g. object=he and objdet=- and objnum=plural yields them).
		'&subject=' + subject + // REQ - any noun or pronoun
		'&verb=' + verb + // REQ - any verb, including phrase-verbs like 'start out'

		// Object-related
		'&objdet=' + objdet + // Specifies the object’s determiner (a, the, –). Default is „a“. Use objdet=- to generate an object without determiner.
		'&objnum=' + objnum + // 'singular' or 'plural' - Default is singular. A value of plural is overridden by objdet=a.
		'&objmod=' + objmod + // An adjective modifying the object

		// Subject-related
		'&subjnum=' + subjnum + // 'singular' or 'plural' - 'plural' is overridden of subjdet=a.
		'&subjdet=' + subjdet + // Specifies the subject’s number (a, the, –). Default is „the“. Use subjdet=- to generate a subject without determiner.

		// Verb-related
		'&tense=' + tense + // 'past' 'present' or 'future' - Default is 'present'

		'&sentencetype=' + sentencetype // Default is a declarative sentence
		// 'yesno' generates a yes/no-question
		// 'whatobj' generates a WH-question for the object
		// 'whosubj' generates a WH-question for the subject

	    // UNUSED PARAMETERS for now
		// '&modal=' + modal + // Specifies a modal verb modifying the verb (can, may, must, ought, shall, should, would). Only allowed for present tense. If tense=past or tense=future is set then the parameter modal will be ignored.
		// '&passive=' + passive + // &passive=passive generates a sentence in passive voice. The object is set as subject and the subject becomes the by-object.
		// '&progressive=' + progressive + // &progressive=progressive sets the progressive (continuous) tense
		// '&perfect=' + perfect + // &perfect=perfect sets the perfect tense
		// '&negated=' + negated // &negated=negated generates a negated sentence

		,options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}




