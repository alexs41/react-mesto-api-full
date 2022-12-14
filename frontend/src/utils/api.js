class Api {
    constructor(config){
        this._url = config.url;
        this._headers = config.headers;
        this._token = '';
    }

    _request = async ({
        url,
        method = 'POST',
        token,
        data
      }) => {
        const res = await fetch(`${this._url}${url}`, {
          method,
          headers: {
            'Content-Type': 'application/json',
            ...!!token && { 'Authorization': `Bearer ${token}` }
          },
          ...!!data && { body: JSON.stringify(data) }
        });
        if (!res.ok)
          return Promise.reject(res.status);
        return await res.json();
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUser = () => {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers
        })
        .then(this._checkResponse);
    }

    authorize = (password, email) => {
        return this._request({
          url: '/signin',
          data: {password, email}
        });
      };
    
    register = (password, email) => {
        return this._request({
            url: '/signup',
            data: {password, email}
        });
    };

    editUser = (user) => {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: user.name,
                about: user.about,
            })
        })
        .then(this._checkResponse);
    }

    getInitialCards = () => {
        return fetch(`${this._url}/cards`, {
                headers: this._headers
            })
            .then(this._checkResponse);
    }

    addCard = (card) => {
        return fetch(`${this._url}/cards`, {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                  name: card.name,
                  link: card.link
                })
            })
            .then(this._checkResponse);
    }
    deleteCard = (card) => {
        return fetch(`${this._url}/cards/${card._id}`, {
                method: 'DELETE',
                headers: this._headers,
            })
            .then(this._checkResponse);
    }
    likeCard = (card) => {
        return fetch(`${this._url}/cards/${card._id}/likes`, {
                method: 'PUT',
                headers: this._headers,
                })
                .then(this._checkResponse);
    }
    disLikeCard = (card) => {
        return fetch(`${this._url}/cards/${card._id}/likes`, {
                method: 'DELETE',
                headers: this._headers,
            })
            .then(this._checkResponse);
    }
    changeLikeCardStatus = (card, isLiked) => {
        return (isLiked ? this.disLikeCard(card) : this.likeCard(card));
    }

    editAvatar = (user) => {
        return fetch(`${this._url}/users/me/avatar`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    avatar: user.avatar,
                })
            })
            .then(this._checkResponse);
    }
    setToken = (token) => {
        this._headers = {
            "content-type": "application/json",
            "authorization": `Bearer ${token}`
        }
    }

}
const apiConfig = {
    url: "https://mesto-backend-alexs41.nomoredomains.club",
    // url: "http://localhost:3001",
    headers: {
      "content-type": "application/json"
    }
  }

export const api = new Api(apiConfig);
