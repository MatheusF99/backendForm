import { Router } from 'express'
import { getRepository } from 'typeorm'

const routes = Router()

routes.get('/', ( req, res )=>{
    return (
        res.json({message: 'hello world'})
    )
})
routes.post('/usuarios', ( req, res )=>{
    
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
    
    return (
        
        res.json({message: 'hello world'})
    )
})

export default routes