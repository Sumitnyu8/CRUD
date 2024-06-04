const getData = () => {

    let datas = localStorage.getItem('data');

    if (datas) {
        return JSON.parse(datas);
    } else {
        return [];
    }

}

export default getData;