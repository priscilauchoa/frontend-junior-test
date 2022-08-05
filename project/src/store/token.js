import { v4 } from 'uuid';

export function deleteToken(token) {
    let tokens = getTokens();
    tokens = tokens.filter((item) => item.id !== token.id);

    persist(tokens);
}

export function createToken(token) {
    exists(token);
    const tokens = getTokens();

    tokens.push({
        ...token,
        id: v4()
    });

    persist(tokens);
}

export function editToken(token) {
    exists(token);
    const tokens = getTokens();

    const tokenRecord = tokens.find((item) => item.id === token.id);
    const tokenIndex = tokens.indexOf(tokenRecord);

    tokens[tokenIndex] = {
        ...tokenRecord,
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

const DuplicatedTokenError = Error('Duplicated token');
function exists(token) {
    const tokens = getTokens();
    let duplicatedTokens = tokens.filter((item) => item.token === token.token);

    const hasManyDuplicatedToken = duplicatedTokens.length > 1;
    const hasDuplicate =
        duplicatedTokens.length === 1 && duplicatedTokens[0].id !== token.id;

    if (hasManyDuplicatedToken || hasDuplicate) {
        throw DuplicatedTokenError;
    }
}
