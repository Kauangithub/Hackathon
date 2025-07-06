const prisma = new PrismaClient()

app.post('/Eventos', async (req, res) => {

    await prisma.event.create({
        data: {
            title: req.body.title,
            desc: req.body.desc,
            dateend: req.body.dateend,
            datestart: req.body.datestart,
        }
    }) 

    res.status(201).json(req.body)

});

export default app;