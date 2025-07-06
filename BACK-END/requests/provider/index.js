import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

import { app } from "../../index.js"
function ReqProvider() {
    app.get('/usuarios', async (req, res) => {
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

    app.post('/usuarios', async (req, res) => {

        await prisma.provider.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age,
            }
        }) 

        res.status(201).json(req.body)

    })

    app.put('/usuarios/:id', async (req, res) => {

        await prisma.provider.update({
            where: {
                id: req.params.id
            },
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age,
            }
        }) 

        res.status(201).json(req.body)

    })

    app.delete('/usuarios/:id', async (req,res) => {

        await prisma.provider.delete({
            where: {
                id: req.params.id
            }
        })

        res.status(201).json({ message: 'Usuario deletado com sucesso'})
    })

}

export { ReqProvider};