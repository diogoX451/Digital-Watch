const { Pool } = require('pg');
const pg = require('pg').Pool;
const client = new Pool({
    user: 'thqkpwob',
    host: 'kesavan.db.elephantsql.com',
    database: 'thqkpwob',
    password: '74oPAldu-IVYK1b1lFyGQhRia-NAkhPG',
    port: 5432,
})
const user = ("/users", (req, res) => {
    client.query('SELECT * FROM "public"."visitas" LIMIT 100', (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(200).json(result.rows);

    });
});

module.exports = {
    client,
    user
}
