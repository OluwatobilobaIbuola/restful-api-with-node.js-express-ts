export default {
    port: 1337,
    dbUri: "mongodb://localhost:27017/teneedDb",
    saltWorkFactor: 10,
    accessTokenTtl: "15m",
    refreshTokenTtl: "1y",
    publicKey:`-----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDHMXVberpvwSMvPe2EJAn4qI4o
    PsYIUaF6+gVem/7d8UpgH1D67h6SvnuVySomxNA2CYZHH7c73YlPs0SUY52n0JYG
    MjxQ0rVZyArxu2wF8L8SKeljbuTtV6HikQyCm6Sa+hV1eSt/05BhJim2a6eXOnVy
    uctwFPJqPt61ENSM5wIDAQAB
    -----END PUBLIC KEY-----
    `,
    privateKey: ``
};
