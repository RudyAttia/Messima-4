let express = require('express')
let cors = require('cors')
let app = express()
const db = require('./db')

app.use(express.json())
app.use(cors())

db.Open(app).then((state) => {
    if (state) {
        console.log('DB Server connected...')
    }
}).catch((err) => {
    console.log(err)
})
app.get('/familly', (req, res) => {
    const con = app.get('CONNECTION')
    sql = `SELECT * FROM familly_name`
    con.query(sql, (err, result, fields) => {
        if (err) {
            res.json({ state: 'error', message: err.message })
        } else {
            if (result.length > 0) {
                res.json(result)
            } else {
                res.json({ error: 'error'})
            }
        }
    })
})

app.get('/all', (req, res) => {
    const con = app.get('CONNECTION')
    sql = `SELECT tasks.text_task, familly_name.name, tasks.date_task, tasks.id_task
    FROM tasks
    INNER JOIN familly_name ON tasks.id_name = familly_name.id_name;`
    con.query(sql, (err, result, fields) => {
        if (err) {
            res.json({ state: 'error', message: err.message })
        } else {
                res.json(result)
        }
    })
})

app.post('/new', (req, res) => {
    const con = app.get('CONNECTION')
    sql = `INSERT INTO tasks ( text_task, id_name ) 
    VALUES('${req.body.texttask}', (SELECT  id_name FROM familly_name WHERE name = '${req.body.author}'));`
    con.query(sql, (err, result, fields) => {
        if (err) {
            res.json({ state: 'error', message: err.message })
        } else {
            res.json({msg:'ok'})
        }
    })
})

app.post('/delete', (req, res) => {
    const con = app.get('CONNECTION')
    sql = `DELETE FROM tasks WHERE id_task = ${req.body.id_task}`
    con.query(sql, (err, result, fields) => {
        if (err) {
            res.json({ state: 'error', message: err.message })
        } else {
            res.json({msg:'ok'})
        }
    })
})

app.listen(3000, _ => console.log("server started on port 3000"))