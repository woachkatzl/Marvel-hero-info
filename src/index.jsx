//React и библиотеки
import React from "react";
import { createRoot } from "react-dom/client";

//Стили
import "./assets/styles/global.scss";
import "./assets/styles/app.scss";

//Изображения
import favicon from "./assets/images/favicon.png";

//Компоненты
import { App } from "./App";


//Рендерим приложение во входном элементе 'root'
const root = createRoot(document.getElementById("root"));
root.render(
  <App></App>
);

//Добавила фавикон на страницу
const pageFavicon = document.createElement("link");
pageFavicon.rel = "shortcut icon";
pageFavicon.href = favicon;
document.head.append(pageFavicon);