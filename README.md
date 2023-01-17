# Проект "Mesto" (React.js + Express.js)
![Иллюстрация к проекту Meso](https://static.tildacdn.com/tild3738-6636-4762-a561-313361366131/__2023-01-17__181329.png)
# Описание
Учебный проект Яндекс.Практикума. Функционал был реализован на протяжении нескольких проектных работ.

В проекте есть две сущности: пользователи и карточки. 
Схемы и модели созданы через Mongoose с валидируемыми полями. Основные роуты защищены авторизацией. Обращение к API происходит через роуты с валидацией запросов через Joi и celebrate. В контроллерах описана логика обработки запросов. Контроллер логина создает JWT токен сроком на неделю. В контроллере регистрации пользователя пароль хешеруется модулем bcryptjs. Для логгирования запросов и ошибок используется библиотека Winston.



## Функционал:
- Регистрация и авторизация пользователей
- Изменение аватара пользователя, имени, информации
- Возможность загрузки фото в ленту
- Удаление загруженных вами карточек
- Постановка и снятие лайка карточкам всех пользователей
- Просмотр фотографии карточки в полноэкранном режие при клике на нее


## Стек технологий:
![JavaScript](https://img.shields.io/badge/-JavaScript-000?style=for-the-badge&logo=javascript)
![ReactJs](https://img.shields.io/badge/-React-000?style=for-the-badge&logo=react)
![NodeJS](https://img.shields.io/badge/-node.js-000?style=for-the-badge&logo=node.js)
![ExpressJS](https://img.shields.io/badge/-express.js-000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/-MongoDB-000?style=for-the-badge&logo=mongodb)
![NGINX](https://img.shields.io/badge/-nginx-000?style=for-the-badge&logo=nginx)
![PM2](https://img.shields.io/badge/-pm2-000?style=for-the-badge&logo=pm2)
![ESLint](https://img.shields.io/badge/-eslint-000?style=for-the-badge&logo=eslint)
![Webpack](https://img.shields.io/badge/-webpack-000?style=for-the-badge&logo=webpack)
![HTML](https://img.shields.io/badge/-HTML-000?style=for-the-badge&logo=html5)
![CSS](https://img.shields.io/badge/-CSS-000?style=for-the-badge&logo=css3)


## Как запустить:
Клонировать репозиторий и установить зависимости.
```
git clone https://github.com/alexs41/react-mesto-api-full.git
cd react-mesto-api-full
npm install
```

## команды для запуска:
Фронтенд:
```
npm run start // Запуск dev сервера
npm run build // Сборка проекта
```
Бэкенд:
```
npm run start // Запуск dev сервера
npm run dev // Запуск dev сервера с hot reload
```


## Ссылки:
Public IP: `158.160.38.61`
* [Репозиторий на Github](https://github.com/alexs41/react-mesto-api-full)
* [Frontend](https://mesto-alexs41.nomoredomains.club/)
* [Backend](https://mesto-backend-alexs41.nomoredomains.club)
