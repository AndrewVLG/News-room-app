### `npm start`

- Пишем функциональные компоненты c хуками в приоритете над классовыми.
- Есть разделение на умные и глупые компоненты [Глупые компоненты](https://github.com/AndrewVLG/News-room-app/tree/main/src/entities), [Умные компоненты](https://github.com/AndrewVLG/News-room-app/tree/main/src/features)
- Есть рендеринг списков [Список статей](https://github.com/AndrewVLG/News-room-app/blob/main/src/widgets/top-headlines/top-headlines.tsx)
- Реализована хотя бы одна форма [Форма регистрации](https://github.com/AndrewVLG/News-room-app/blob/main/src/features/registration/index.tsx)
- Есть применение Контекст API [AppContext](https://github.com/AndrewVLG/News-room-app/blob/main/src/app/index.tsx)
- Есть применение предохранителя [withErrorBoundary](https://github.com/AndrewVLG/News-room-app/blob/main/src/app/index.tsx)
- Есть хотя бы один кастомный хук [Хуки](https://github.com/AndrewVLG/News-room-app/tree/main/src/shared/hooks)
- Хотя бы несколько компонентов используют PropTypes 
- Поиск не должен триггерить много запросов к серверу [Хук useDebounce](https://github.com/AndrewVLG/News-room-app/blob/main/src/shared/hooks/use-debounce.ts)
- Есть применение lazy + Suspense [Lazy and Suspense](https://github.com/AndrewVLG/News-room-app/blob/main/src/app/index.tsx)
- Redux
- Используем Modern Redux with Redux Toolkit [app-redux](https://github.com/AndrewVLG/News-room-app/blob/main/src/app/app-redux/index.ts)
- Используем слайсы [login-slice](https://github.com/AndrewVLG/News-room-app/blob/main/src/features/userbar/model/login-slice.ts)
- Есть хотя бы одна кастомная мидлвара [localStorage-middleware](https://github.com/AndrewVLG/News-room-app/blob/main/src/app/app-redux/middleware/local-storage-middleware.ts)
- Используется RTK Query [news-api](https://github.com/AndrewVLG/News-room-app/blob/main/src/shared/api/news-api.ts)
- Используется Transforming Responses [news-api](https://github.com/AndrewVLG/News-room-app/blob/main/src/shared/api/news-api.ts)
