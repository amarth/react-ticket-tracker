const messages = [
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	"Duis in mi eu orci imperdiet consequat tincidunt vitae justo.",
	"Cras eleifend dolor vel ligula pulvinar, non fermentum eros dapibus.",
	"Ut sit amet sapien eu erat pulvinar vehicula sit amet at eros.",
	"Nunc facilisis tellus vitae malesuada volutpat.",

	"Nullam blandit lectus in tristique porta.",
	"Nullam facilisis nisl a enim ultrices mattis.",
	"Sed semper sapien non magna euismod tempor.",
	"Sed finibus velit sit amet lacus ullamcorper varius.",
	"Morbi non leo eget libero convallis porta.",

	"Sed ut turpis vitae lacus vehicula tincidunt nec eu lorem.",
	"Fusce vulputate nunc a nibh porttitor tincidunt.",
	"Sed egestas tellus dapibus enim porta, in faucibus ex feugiat.",
	"Duis eu nulla commodo, placerat nunc quis, porttitor leo.",
	"Morbi lacinia lectus at arcu fringilla, nec ultricies nulla viverra.",

	"Aliquam tincidunt mi eget justo feugiat rutrum.",
	"Suspendisse dapibus magna mattis urna sollicitudin, eu elementum velit lobortis.",
	"Aliquam vel lorem mollis, malesuada sem quis, gravida leo.",
	"Aenean scelerisque ante id lacus scelerisque, ac sagittis mi efficitur.",
	"Nam eget justo vitae ante gravida pharetra gravida vitae libero.",
	"Suspendisse elementum ligula vel est dignissim tempus.",

	"Ut eu justo congue, egestas ipsum eu, vehicula ligula.",
	"Cras ut metus nec turpis congue vehicula nec eu turpis.",
	"Fusce accumsan felis vitae dolor pretium tincidunt.",
	"Duis iaculis libero sit amet venenatis iaculis."
];

const words = 'lorem ipsum dolor sit amet consectetur adipiscing elit nullam nisl eros commodo sit amet velit et mattis hendrerit felis'.split(' ');

const ticketType = {
  INFO: 'INFO',
  NOTIFICATION: 'NOTIFICATION',
  ISSUE: 'ISSUE'
}

const ticketTypes = Object.keys(ticketType);

const emails = words.map((word) => `${word}@test.com`);

const generateNumberInRange = (to) => Math.floor((Math.random() * to));

const genType = () => ticketTypes[generateNumberInRange(3)];

const genLine = () => messages[generateNumberInRange(messages.length-1)];

const genLines = () => {
    const num = generateNumberInRange(3) + 2;
    let lines = [];
    for(let i=0; i<num; i++) {
        lines.push(genLine());
    }
    return lines;
}

const genEmail = () => emails[generateNumberInRange(emails.length-1)];

const genTicket = (id) => {
  return { 
	id: id ? id : undefined,
    type: genType(),
    title: genLine(), 
    description: genLines().join(''),
    email: genEmail(),
    comments: genLines()
  };
}

export default genTicket;