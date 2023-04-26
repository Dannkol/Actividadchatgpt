const respuesta = {
    resp(msg){
        return `<div>${msg}</div>`;
    }
}



self.addEventListener("message", (e) => {
    console.log(e.data.data.generations[0].text)
  
    postMessage([
      respuesta.resp(e.data.data.generations[0].text)
    ]);
  });