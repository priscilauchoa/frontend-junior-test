import { v4 } from 'uuid';

export function deleteToken(id) {
    let tokens = getTokens();
    tokens = tokens.filter((token) => token.id !== id);

    persist(tokens);
}

export function createToken(token) {
    exists(token.token);
    const tokens = getTokens();

    tokens.push({
        ...token,
        id: v4()
    });

    persist(tokens);
}

export function editToken(token) {
    exists(token.token);
    const tokens = getTokens();

    tokens[token.index] = {
        ...tokens[token.index],
        token: token.token,
        balance: token.balance
    };

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

function exists(token) {
    const tokens = getTokens();
    let hasToken = tokens.some((item) => item.token === token);
    if (hasToken) {
        throw Error('Duplicated token');
    }
}
