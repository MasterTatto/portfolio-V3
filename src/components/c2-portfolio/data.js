import cards from '../../assets/img/portfolio/cards.png'
import portfolio from '../../assets/img/portfolio/portfolio.png'
import todos from '../../assets/img/portfolio/todos.png'
import converter from '../../assets/img/portfolio/converter.png'
import weather from '../../assets/img/portfolio/weather.png'

export const items = [
    {
        title: 'Cards',
        description: 'Приложение позволяющее учить определения программирования с умным рандомом , в зависимости от ваших ответов вам будут попадать вопросы , на которые вы плохо ответили.',
        img: cards,
        stack: 'React, Redux, Sass, Axios, Rest-api, Redux-thunk, TypeScript, UI-Material',
        demo: 'https://mastertatto.github.io/cards_v2/',
        code: 'https://github.com/MasterTatto/cards_v2'
    },
    {
        title: 'Portfolio',
        description: 'Портфолио данного приложения где вы находитесь сейчас, имеет переключение заднего фона на панеле слева ',
        img: portfolio,
        stack: 'React, SASS, JavaScript, Animation library, Axios, Rest-api and private back-end',
        demo: 'https://mastertatto.github.io/portfolio-v3/',
        code: 'https://github.com/MasterTatto/portfolio-v3'
    },
    {
        title: 'ToDo',
        description: 'Сложный Todo лист, можно добавлять до 10 листов с заданиями, имеет полный функционал Todo листа : удаление, добавление, изменение и сортировка',
        img: todos,
        stack: 'React, Redux, Sass, Axios, Rest-api, Redux-thunk, TypeScript, UI-Material',
        demo: 'https://mastertatto.github.io/ToDo/',
        code: 'https://github.com/MasterTatto/todo_start_zero'
    },
    {
        title: 'Social Network',
        description: 'In progress',
        img: 'https://cdn.jhmrad.com/wp-content/uploads/southdown-homes-new-chester-county_2241671.jpg',
        stack: 'In progress',
        demo:'/',
        code:'/'
    },
    {
        title: 'Converter',
        description: 'Простое приложение работающее от национального банко , позволяет конвертировать валюту',
        img: converter,
        stack: 'React, Redux, Sass, Axios, Rest-api, Redux-thunk, TypeScript',
        demo: 'https://mastertatto.github.io/converter/',
        code: 'https://github.com/MasterTatto/converter'
    },
    {
        title: 'Weather',
        description: 'Прогноз погоды с бесплатным сервером для поиска погоды на текущий день',
        img: weather,
        stack: 'React, Redux, Sass, Axios, Rest-api, Redux-thunk, TypeScript, UI-Material',
        demo: 'https://mastertatto.github.io/new_weather',
        code: 'https://github.com/MasterTatto/new_weather'
    },
]