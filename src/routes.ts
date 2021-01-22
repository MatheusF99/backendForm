import { Router } from 'express'
import { getRepository } from 'typeorm'
import Usuarios from '../src/models/Usuarios'

const routes = Router()

routes.get('/', ( req, res )=>{
    return (
        res.json({message: 'hello world'})
    )
})
routes.post('/usuarios', async( req, res )=>{
    
    const {
        name,
        latititude,
        longitude,
        about,
        instructions, 
        open_in_hours, 
        open_on_weekends,
        telefone,

    } = req.body

    const usuarioRepository = getRepository(Usuarios)

    const usuario = usuarioRepository.create({
        name,
        latititude,
        longitude,
        about,
        instructions, 
        open_in_hours, 
        open_on_weekends,
        telefone,

    })

    await usuarioRepository.save(usuario)
    
    return (
        
        res.json({message: 'hello world'})
    )
})

export default routes