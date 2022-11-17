const terminal = process.argv[2]

 const mdlinks = (path, options = {validate: false}) => {
  return new Promise((resolve, reject) =>{
    resolve('te ganaste un almuerzo gratis', path)
  } )
 }

mdlinks(terminal)
.then(res=>console.log(res))
.catch(err=>console.log(err))