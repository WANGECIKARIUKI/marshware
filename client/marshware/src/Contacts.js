import Ract, {useState, useEffect} from 'react';

function Contacts(){
    const url = 'http://randomuser.me/api';
    const [personData, setPersonData] = ("");

    useEffect(() => {
        fetch('${url}')
        .then(res => res.json())
        .then(data => {setPersonData(data)
            console.log("data");

        })

    }, []);

    return (
        <div className = "person-data">

            {(typeof personData === "undefined") ? (
                <div>
                    <p> LOading...</p>
                </div>
            ) : (
                <div>
                    <p>Loaded Successfully!</p>
                    <p>Name: {personData.results[0].name.first}</p>
                    <p>Age: {personData.results[0].dob.age}</p>
                    <p>Gender: {personData.results[0].gender}</p>
                    <p>LOcation: {personData.results[0].location.street}</p>




                </div>
            )}
        </div>
    )







}

export default Contacts