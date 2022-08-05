export function deleteToken(id) {
    let tokens = getTokens();
    tokens = tokens.filter((token) => token.id !== id);

    persist(tokens);
}

export function createToken(token) {
    const tokens = getTokens();
    console.log('tokens______>', token);

    tokens.push({
        ...token,
        id: tokens.length + 1
    });

    persist(tokens);
}

export function getTokens() {
    const tokens = window.localStorage.getItem('token');
    if (tokens) {
        return JSON.parse(tokens);
    }
    return [];
}

function persist(tokens) {
    window.localStorage.setItem('token', JSON.stringify(tokens));
}
