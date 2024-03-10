import { useEffect, useState } from "react";

function App() {
  const [yukleniyor, yukleniyorGuncelle] = useState(true)
  const [data, setData] = useState([]);

  useEffect(() => {

    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.org/users');
      const jsObjectData = await response.json();
      setData(jsObjectData);
      yukleniyorGuncelle(false)
    };

    setTimeout( fetchData , 2000 )

  }, []); 

  console.log(data);

  return (
    <>
      { yukleniyor && <p>Yükleniyor..</p> }
      {  data.map(  kisi => <p key={kisi.id}> {kisi.firstname} </p> )  }
    </>
  );
}

export default App;
