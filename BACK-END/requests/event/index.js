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
                    }
                })
            } else {
                events = await prisma.event.findMany()
            };
    
            res.status(200).json(events)
        }
    )
    app.put('/eventos/:id', async (req, res) => {
    
            await prisma.user.update({
                where: {
                    id: req.params.id
                },
                data: {
                    status: req.body.status,
                    title: req.body.title,
                    local: req.body.local,
                    desc: req.body.desc,
                    dateStart: req.body.dateStart,
                    dateEnd: req.body.dateEnd,
                    published: req.body.published,
                }
            }) 
    
            res.status(201).json(req.body)
    
        }
    )
        

}

export {ReqEvent};  