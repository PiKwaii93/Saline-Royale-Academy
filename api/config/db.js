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

export default pool;
