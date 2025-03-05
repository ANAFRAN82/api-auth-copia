
const login = async(username, password)=>{
    const URL_USER_SERVICE = "http://localhost:3000/users/username/";
    
    try{
        const response = await fetch(URL_USER_SERVICE + username);
        if(response.status == 200){
            const user = await response.json();
            if(user.username == username && user.password == password){
                return{
                    status:200,
                    token:"token-falso-" +user._id
                };
            }else{
                return{
                    status:403,
                    message:"Usuario no autorizado, credenciales invalidas"
                }
            }
        }else{
            return{
                status:404,
                message:"Usuario no encontrado"
            }
        }

    }
    catch(error){
        return{
            status:500,
            message:error.message
        }
    }
    
}

    

module.exports ={login}