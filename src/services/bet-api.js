import tokenService from '../utils/tokenService';

const BASE_URL = '/api/bets';

export function getAll() {
    return fetch(BASE_URL, {
        method: 'GET',
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},

    }).then(res => res.json());
}
export function create(bet) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(bet)
    }).then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}

export function update(bet) {
    return fetch(`${BASE_URL}/${bet._id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(bet)
    }).then(res => res.json());
}