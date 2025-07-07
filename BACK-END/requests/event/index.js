import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

import { app } from "../../index.js"
function ReqEvent() {  
    app.post('/eventos', async (req, res) => {

        await prisma.event.create({
            data: {
                title: req.body.title,
                desc: req.body.desc,
                dateStart: req.body.dateStart,
                dateEnd: req.body.dateEnd,
                local: req.body.local,
                price: req.body.price,
                author: {
                    connect: {
                        id: req.query.id
                    }
                },
            }
        }) 

        res.status(201).json(req.body)

    });

    // busca os eventos aceitos
    app.get('/eventos', async (req, res) => {
            let events = [];
    
            if (req.query) {
                events = await prisma.event.findMany({
                    where: {
                        title: req.query.title,
                        dateStart: req.query.dateStart,
                        dateEnd: req.query.dateEnd,
                        authorId: req.query.authorId,
                        published: req.query.published,
                        price: req.query.price,
                        local: req.query.local,
                        status: req.query.status,
                        desc: req.query.desc,
                        author: {
                            user:{
                                name: req.query.name,
                            },
                            verified : req.query.verified,
                            enterprise : req.query.enterprise,
                            branch : req.query.branch,
                        }
                    }
                })
            } else {
                events = await prisma.event.findMany()
            };
    
            res.status(200).json(events)
        }
    )
    app.put('/eventos/:id', async (req, res) => {
    
            await prisma.event.update({
                where: {
                    id: req.params.id
                },
                data: {
                    status: req.body.status,
                    title: req.body.title,
                    local: req.body.local,
                    price: req.body.price,
                    desc: req.body.desc,
                    dateStart: req.body.dateStart,
                    dateEnd: req.body.dateEnd,
                    published: req.body.published,
                }
            }) 
    
            res.status(201).json(req.body)
    
        }
    )
    app.delete('/eventos/:id', async (req,res) => {
    
            await prisma.event.delete({
                where: {
                    id: req.params.id
                }
            })
    
            res.status(201).json({ message: 'Evento deletado com sucesso'})
        }
    )
        

}

export {ReqEvent};  