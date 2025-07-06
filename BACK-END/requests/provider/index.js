import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

import { app } from "../../index.js"
function ReqProvider() {
    app.get('/prestadores', async (req, res) => {
        let providers = []

        if (req.query) {
            providers = await prisma.provider.findMany({
                where: {
                    name: req.query.name,
                    email: req.query.email,
                    age: req.query.age,
                    senha: req.query.senha,
                    role: req.query.role,
                    Provider: req.query.provider,
                    cpfCnpj: req.query.cpfCnpj,
                    enterprise: req.query.enterprise,
                    branch: req.query.branch,
                    writtenEvents: req.query.events,
                }
            })
        } else {
            providers = await prisma.provider.findMany()
        }

        res.status(200).json(providers)
    })

    app.post('/prestadores', async (req, res) => {

        await prisma.provider.create({
            data: {
                cpfCnpj: req.body.cpfCnpj,
                enterprise: req.body.enterprise,
                branch: req.body.branch,
                user: {
                    connect: {
                        email: req.query.email
                    }
                },
            }
        })
        res.status(201).json(req.body) 
        await prisma.user.update({
            where: {
                email: req.query.email
            },
            data: {
                role: 'PROVIDER',
            }});
        
    })

    app.put('/prestadores/:id', async (req, res) => {

        await prisma.provider.update({
            where: {
                id: req.params.id
            },
            data: {
                cpfCnpj: req.body.cpfCnpj,
                enterprise: req.body.enterprise,
                branch: req.body.branch,
            }
        }) 

        res.status(201).json(req.body)

    })

    app.delete('/prestadores/:id', async (req,res) => {

        await prisma.provider.delete({
            where: {
                id: req.params.id
            }
        })

        res.status(201).json({ message: 'Prestador deletado com sucesso'})
    })

}

export { ReqProvider};