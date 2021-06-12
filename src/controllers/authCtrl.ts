import {Request, Response} from 'express'

export const authStart = async (req : Request, res : Response) =>{
    await res.json('Hello World');
}