const BASE_URL = '/api/bets';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}
export function create(bet) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(bet)
    }).then(res => res.json());
}