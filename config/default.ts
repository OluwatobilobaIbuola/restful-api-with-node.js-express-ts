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
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
    MIICXQIBAAKBgQDHMXVberpvwSMvPe2EJAn4qI4oPsYIUaF6+gVem/7d8UpgH1D6
    7h6SvnuVySomxNA2CYZHH7c73YlPs0SUY52n0JYGMjxQ0rVZyArxu2wF8L8SKelj
    buTtV6HikQyCm6Sa+hV1eSt/05BhJim2a6eXOnVyuctwFPJqPt61ENSM5wIDAQAB
    AoGAImG3EAMvCvsbR5w40wYlcnYlk2zCYc01QjTFmH70jvqHC/Bb2fQf8tROIJyI
    Wgi+p5UdSEmBJyQl/0vCGprXK0H2nzt8MjTHc7KPzU/Nwh5PGSOVsrqF/PjNKQDk
    lZFDiIgte6683FhfGy/3TBrdjPDEdKKz8hqiOpPMLrWcYQECQQDzxKXReCG5yNNf
    fwmQziwhDtDErb8HsGB0p9H/mGwlZ/xgczicO+1fzTjyWt4Y6tUntwyalwA+Tf1O
    hgKzApPpAkEA0TA3xp43Z0eUql5JN2bE5hxaUbTM89zBDjLfXhc+4kv3xaxJ++Hs
    frpi4estXb5kVEBEpbWYbNAe89B+LzioTwJBAKUIYD6lNygBV2ESr5Yyjtu+nQZa
    nrcE6PhxWZHSTn0wnkNqHkxfogA2/zPM4wo5ih++JLFQQ6DqyfBsd81blGkCQQCh
    mNENgv2jsB09OxbuUFp8tJxlD/lfzUHpuQzqf6SZZjwinQSOKynpgAyRH37tMv4I
    Q5mENXNpY6D1kjNYQTlrAkBIqw2kmj+kcYP74Z3FLpGp+5EkNxmZjlh6zLsSr/WX
    6Mqek91itIdMHYGG0UAcXXKSGZG2ag98BOtXNQUXlh9N
    -----END RSA PRIVATE KEY-----
    `
};