import pool from '../../database/index';
import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
};

export const getUserById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
};

export const createUser = (req: Request, res: Response) => {
  const { name, email } = req.body

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results: any) => {
    if (error) {
      throw error
    }
    res.status(201).send(`User added with ID: ${results.insertId}`)
  })
};