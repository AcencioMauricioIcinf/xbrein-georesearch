const URL = 'https://bc6mw5ile4bzkng63fzjwf7gdq0hbnxz.lambda-url.us-east-2.on.aws/';

export const getPois = category => {
    let url = URL;
    if (category) url += `?category=${category}`;
    return fetch(url).then(res => res.json()).then(res => res.pois);
};