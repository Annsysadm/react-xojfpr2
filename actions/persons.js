export function personsFetchDataSucssess(persons){
  return {
    type: "PERSONS_FETCH_DATA_SUCCESS", 
    persons
    
  }
}

/* Запрос данных. Используем fetch вместо axios. fetch использует промисы, метод then. Если responce возвратился с (ok=false) - когда с запросом что-то не так, то выдаст ошибку. 
response.statusText - что именнос тало причиной ошибки, если ok, то возвратит ответ responce - возвращает в формате  JSON. Поэтому его надо сначала распарсить(сериализация и десериализация JSON, конвертация) */

export function personsFetchData(url){
  return (dispatch)=>{
    fetch(url)
        .then(response => {
          if(!response.ok) {
            throw new Error(response.statusText)
          }
          return response;
        })
        .then(response=> response.json())
        .then(persons => dispatch(personsFetchDataSuccess(persons)))
  }
}