### `npm start`

По FSD раскажу, как я вижу:

app - инициализация стора, реакт роутер и т.д

widgets - самые крупные блоки типа хедер, футер, какие-то секции и т.д
состоящие из features и entities

features - умные компоненты(если конечно у меня получилось их реализовать),
у которых есть свои состояния и логика. features состоят из блоков entitie.

entities - маленькие сторительные блоки. Поидеи все должны быть "глупыми" компонентами.

shraed - различные кастомные хуки, кастомные Material-UI, утилиты, глобальные конфиги и т.д
React

- Пишем функциональные компоненты c хуками в приоритете над классовыми.
- Есть разделение на умные и глупые компоненты (https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0, перевод - https://habr.com/ru/post/266559/). Это лишь общая рекомендация. Обратите внимание на Update from 2019 по первой ссылке от Дэна.
- Есть рендеринг списков (https://ru.reactjs.org/docs/lists-and-keys.html)
- Реализована хотя бы одна форма (https://ru.reactjs.org/docs/forms.html)
- Есть применение Контекст API (https://ru.reactjs.org/docs/context.html)
- Есть применение предохранителя (https://ru.reactjs.org/docs/error-boundaries.html)
- Есть хотя бы один кастомный хук (https://ru.reactjs.org/docs/hooks-custom.html)
- Хотя бы несколько компонентов используют PropTypes (https://ru.reactjs.org/docs/typechecking-with-proptypes.html)
- Поиск не должен триггерить много запросов к серверу (https://ru.reactjs.org/docs/faq-functions.html#how-can-i-prevent-a-function-from-being-called-too-quickly-or-too-many-times-in-a-row)
- Есть применение lazy + Suspense (https://ru.reactjs.org/docs/code-splitting.html#route-based-code-splitting)
  Redux
- Используем Modern Redux with Redux Toolkit (https://redux.js.org/tutorials/fundamentals/part-8-modern-redux)
- Используем слайсы (https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#using-createslice)
- Есть хотя бы одна кастомная мидлвара (https://redux.js.org/understanding/history-and-design/middleware)
- Используется RTK Query (https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics)
- Используется Transforming Responses (https://redux.js.org/tutorials/essentials/part-8-rtk-query-advanced#transforming-responses)
