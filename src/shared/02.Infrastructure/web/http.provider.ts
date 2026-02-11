import express from 'express';
import { asFunction, type AwilixContainer } from 'awilix';
import cors from 'cors';

export function registerHttpProvider(container: AwilixContainer): void {
    container.register({
        app: asFunction(() => {
            const app = express();
            app.use(express.json());
            
            const allowedOrigins = ['http://localhost:5173']

            // cors({
            //     origin: (origin, callback) => {
            //         //if(!origin) return callback(null, true); // Allow requests with no origin (like mobile apps or curl requests)
            //         if(!origin || allowedOrigins.indexOf(origin) === -1) {
            //             return callback(new Error('Not allowed by CORS'));
            //         }
            //         return callback(null, true);
            //     }, 
            // }); // Enable CORS for all routes, should be placed after all other routes and middleware to ensure it applies to all requests.

            // Global middleware can be registered here
            app.use(cors())

            return app;
        }).singleton(),
    })
};