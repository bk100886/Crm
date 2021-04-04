export function validateEmail(email:string):string {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())){
        return "Некорректный формат адреса электронной почты";
    }
    return "";
}

export function validatePassword(password:string):string{
    if (password.length<6){
        return "Длина пароля должна быть не менее 6 символов";
    }
    return "";
}

export function validatePasswords(password1:string, password2:string):string{
    if (password1!==password2){
        return "Пароли не совпадают";
    }
    return "";
}