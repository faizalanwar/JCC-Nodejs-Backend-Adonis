import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Role {
  public async handle ({auth, response}: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    let userRole = auth.user?.role
    if(userRole != undefined){
      if(userRole == 'owner'){
        await next()
      }else{
         return response.unauthorized({message: 'Anda tidak dapat menggunakan fitur ini karena bukan owner'})
      } 
    }
    return response.unauthorized({message: 'Role belum ditentukan'})
  }
}

