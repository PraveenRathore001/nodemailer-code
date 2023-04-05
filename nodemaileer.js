const nodemailer = require('nodemailer');


let mailTransporter = nodemailer.createTransport({
	service: 'outlook',
	auth: {
		user: 'rishabhshri20@outlook.com',
		pass: 'Rishabh@123'
	}
});

let mailDetails = {
	from: 'rishabhshri20@outlook.com',
	to: 'praveenrathore236@gmail.com',
	subject: 'Test mail',
	text: 'Node.js testing mail for GeeksforGeeks'
};

mailTransporter.sendMail(mailDetails, function(err, data) {
	if(err) {
		console.log('Error Occurs');
	} else {
		console.log('Email sent successfully');
	}
});
