import { useEffect, useState } from "react";


function App() {
  const[paragrafGoster, paragrafIslem]=useState(true)
  const[sayac, sayacGuncelle]=useState(0)
  useEffect(()=>{   // 1 parametreli vers. return'dan sonra çalışır.
    setTimeout(()=>{
      sayacGuncelle(eskiDeger=> eskiDeger+1)
      console.log("Useeffect çalıştı..");
    }, 2000)
  })

  
  
  return (
   <>
   {paragrafGoster&&<p id="p1">App</p> }    
   Sayaç: {sayac} 
   </>
  )
}

export default App;
