const URL = 'https://bc6mw5ile4bzkng63fzjwf7gdq0hbnxz.lambda-url.us-east-2.on.aws/';

export const getPois = () => fetch(URL).then(res => res.json()).then(res => res.pois);