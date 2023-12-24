$(function() {
	var now = new Date();
	$('.screen-content')
	.fbMessenger({
			botName: 'Anoop Kumar',
			botLogoUrl: 'img/x.webp',
			loop:false
		})
	.fbMessenger('start', { delay: 1000 })
	.fbMessenger('typingIndicator', { delay: 2000 })
	.fbMessenger('message', 'bot', 'Hello, my name is <b>Anoop Kumar</b>. <br> aka <b>helllguest</b>. It\'s a pleasure to meet you.', { timestamp: now, delay: 1500 })
	.fbMessenger('message', 'user', 'Hello, Anoop, what is your profession?', { timestamp: now, delay: 1500 })
	.fbMessenger('typingIndicator', { delay: 1000 })
	.fbMessenger('message', 'bot', 'I am an avid technology enthusiast and cyber security specialist. Some of my interests and hobbies include reverse engineering, compiling android roms, kernels, penetration testing and more.', { timestamp: now, delay: 1500 })
	.fbMessenger('message', 'user', 'That sounds very interesting. What kind of skills do you need for that job?', { timestamp: now, delay: 1500 })
	.fbMessenger('typingIndicator', { delay: 2500 })
	.fbMessenger('message', 'bot', 'I have obtained Microsoft and Cisco certifications, I need to have a good knowledge of computer hardware, networks, cryptography, malware analysis, and ethical hacking. I also need to be able to think like an attacker and anticipate their moves.', { timestamp: now, delay: 4000 })
	.fbMessenger('message', 'user', 'I see. How do you like your job?', { timestamp: now, delay: 1500 })
	.fbMessenger('typingIndicator', { delay: 2500 })
	.fbMessenger('message', 'bot', 'This is something I\'m passionate about and it brings me great joy. I love it. It\'s challenging, rewarding, and fun. I get to learn new things every day and solve complex problems.', { timestamp: now, delay: 4000 })
	.fbMessenger('typingIndicator', { delay: 2500 })
	.fbMessenger('message', 'bot', 'Please feel free to connect with me via the links below to continue the conversation.', { timestamp: now, delay: 3000 })
	.fbMessenger('message', '', '', { timestamp: now, delay: 0 })
	.fbMessenger('showQuickReplies', [
		'<a href="https://thengakulatechs.github.io/" target="_blank">Blog</a>',
		'<a href="https://www.github.com/helllguest/" target="_blank">Github</a>',
		'<a href="https://www.linkedin.com/in/anoopkumar1119/" target="_blank">Linkedin</a>',
		'<a href="https://twitter.com/helllguest/" target="_blank">X</a>',
		'<a href="https://forum.xda-developers.com/member.php?u=4441934" target="_blank">XDA</a>',
	], { timestamp: now, delay: 1500 })
	.fbMessenger('run');
});
