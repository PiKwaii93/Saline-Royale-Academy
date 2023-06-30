import mariadb from 'mariadb';

const pool = mariadb.createPool({
  host: 'mariadb',
  user: 'root',
  password: 'password',
  database: 'test'
});


pool.getConnection((err, connexion) => {
  if (err) {
    console.error('error', err);
  }
  if (connexion) connexion.release();
  return;
});

console.log("//////////////////////////////")
console.log(process.env)
console.log("//////////////////////////////")

export default pool;
