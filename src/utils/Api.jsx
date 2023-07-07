import {useEffect,useState} from 'react';

const url = "Hello bilaal";
const options = {
    method : "Get"
}
const Api = () => {
    const [data,setData] = useState([]);
    useEffect(()=> {
        fetch(url,options).then(response => response.json()).then(result => setData(result)).catch(error => console.log(error));
    });
    return (
        <>
            <div>
                {console.log(data)}
            </div>
        </>
    )
};

export default Api;



