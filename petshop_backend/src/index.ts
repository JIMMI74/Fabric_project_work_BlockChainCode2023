import createServer from './server';

const PORT = process.env.PORT || '3001';
const server = createServer();

server.listen(+PORT, '0.0.0.0', (err, address) => {
	if (err) throw err;
	console.log(`server listening on ${address}`);
});

module.exports = server;
