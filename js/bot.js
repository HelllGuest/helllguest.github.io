$(function() {
	var now = new Date();
	$('.screen-content')
	.fbMessenger({
			botName: 'Anoop Kumar',
			botLogoUrl: 'img/x.png',
			loop:false
		})
	.fbMessenger('start', { delay: 0 })
	.fbMessenger('typingIndicator', { delay: 2000 })
	.fbMessenger('message', 'bot', 'Hello, I\'m <b>Anoop Kumar</b>', { timestamp: now, delay: 1500 })
	.fbMessenger('typingIndicator', { delay: 2500 })
	.fbMessenger('message', 'bot', 'aka helllguest', { timestamp: now, delay: 1500 })
	.fbMessenger('message', 'user', 'Hello, Anoop', { timestamp: now, delay: 1500 })
	.fbMessenger('typingIndicator', { delay: 1000 })
	.fbMessenger('message', 'bot', 'I\'m a Tech Enthusiast.', { timestamp: now, delay: 1500 })
	.fbMessenger('message', 'user', 'What do you do for fun ?', { timestamp: now, delay: 1500 })
	.fbMessenger('typingIndicator', { delay: 2500 })
	.fbMessenger('message', 'bot', 'Reverse engineering, compiling android roms, kernels, building apps, web designing, etc.', { timestamp: now, delay: 4000 })
	.fbMessenger('message', 'user', 'What else you do ?', { timestamp: now, delay: 1500 })
	.fbMessenger('typingIndicator', { delay: 2500 })
	.fbMessenger('message', 'bot', 'I\'m also a Microsoft certified professional', { timestamp: now, delay: 4000 })
	.fbMessenger('typingIndicator', { delay: 2500 })
	.fbMessenger('message', 'bot', 'You can connect to me by clicking the links below.', { timestamp: now, delay: 3000 })
	.fbMessenger('message', '', '', { timestamp: now, delay: 0 })
	.fbMessenger('showQuickReplies', [
		'<a href="https://www.github.com/helllguest">Github</a>',
		'<a href="https://forum.xda-developers.com/member.php?u=4441934">XDA Developers</a>',
	], { timestamp: now, delay: 1500 })
	// .fbMessenger('scrollQuickReplies', 3, { delay: 2000 })
	// .fbMessenger('scrollQuickReplies', 0, { delay: 1000 })
	// .fbMessenger('scrollQuickReplies', 4, { delay: 1000 })
	// .fbMessenger('selectQuickReply', 2, { delay: 1200 })
	// .fbMessenger('typingIndicator', { delay: 2000 })
	// .fbMessenger('message', 'bot', 'Obvious choice, haha', { timestamp: now, delay: 1000 })
	// .fbMessenger('typingIndicator', { delay: 200 })
	// .fbMessenger('message', 'bot', 'You gotta scroll down now.. DO IT!', { timestamp: now, delay: 800 })
	// .fbMessenger('message', '', '', { timestamp: now, delay: 0 })
	// .fbMessenger('message', '', '', { timestamp: now, delay: 0 })

	.fbMessenger('run');
});
