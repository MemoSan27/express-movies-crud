const request = require('supertest');
const app = require('../app');
require('../models');

let id;
let token;

//*GET ALL GENRES
test('GET / genres debe traer todos los genres', async() => { 
    const res = await request(app)
    .get('/genres')

    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});

//*CREATE GENRE
test('POST / genres debe de crear un genre', async() => {
    
    const newGenre = {
        name: "Comedia",
        
    }

    const res = await request(app)
                    .post('/genres')
                    .send(newGenre)
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.name).toBe("Comedia");
});

//*MODIFY GENRE
test("PUT /genres/:id debe actualizar un genre", async() => {
    const genre = {
        name: "genre actualizado"
    }

    const res = await request(app)
    .put(`/genres/${id}`)
    .send(genre)

    expect(res.status).toBe(200);
    expect(res.body.name).toBe("genre actualizado");
})


//*DELETE GENRE
test('DELETE / genres should delete an genre', async() => {
    const res = await request(app)
    .delete(`/genres/${id}`)

    expect(res.status).toBe(204);
})