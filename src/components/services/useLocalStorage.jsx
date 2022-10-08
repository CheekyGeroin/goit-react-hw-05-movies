import { useState, useEffect } from "react";

const useLocalStorage = (initialValue, key) => { //кастомный хук
  const getValue = () => {
    const storage = localStorage.getItem(key);  //достаем с стореджа

    if (storage) {// проверка на наличие
      return JSON.parse(storage);  //парс
    }

    return initialValue; //если нет пустой массив
  };

  const [value, setValue] = useState(getValue); //полученно в муви при запросе

  useEffect(() => { // србатывает при изминении в сторедже
    localStorage.setItem(key, JSON.stringify(value)); //запись в сторедж по полученому ключу с муви и данные при запросе с муви
  }, [value, key]);

  return [value, setValue];  // функция возращает массив куда будут писаться данные для дальнейшей обработки
}

export { useLocalStorage };