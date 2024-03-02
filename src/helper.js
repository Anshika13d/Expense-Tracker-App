//local storage
export const fetchData = (key) => {
    return JSON.parse(loccalStorage.getItem(key));
};