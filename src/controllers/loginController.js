const { isLoginPermittedFor, storeLoginEntry, incrementLoginAttemptsCounter } = require('../utils');

exports.post = async (req, res) => {
  const ipAddress = req.header('x-forwarded-for') || req.socket.remoteAddress;

  console.log('Request encountered from IP: ', ipAddress);

  await incrementLoginAttemptsCounter(ipAddress);

  const isLoginPermitted = await isLoginPermittedFor(ipAddress);
  if (!isLoginPermitted) {
    console.log('Login unsuccessful: Exceeded allowed attempts.');

    return res.status(429).send();
  }

  await storeLoginEntry(ipAddress);

  return res.status(200).send(`Login successful for IP ${ipAddress}`);
}
