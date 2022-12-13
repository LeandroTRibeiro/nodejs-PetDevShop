import { Request, Response } from "express";

export const homePage = (req: Request, res: Response) => {

    res.send('Home page galera');
};

export const dogs = (req: Request, res: Response) => {

    res.send('Dog page galera');
};

export const cats = (req: Request, res: Response) => {

    res.send('Cat page galera');
};

export const fishes = (req: Request, res: Response) => {

    res.send('Fishes page galera');
};
