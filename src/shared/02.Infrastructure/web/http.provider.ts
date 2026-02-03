import express from 'express';
import { asFunction, type AwilixContainer } from 'awilix';

export function registerHttpProvider(container: AwilixContainer): void {
    container.register({
        app: asFunction(() => {
            const app = express();
            app.use(express.json());
            
            // Global middleware can be registered here

            return app;
        }).singleton(),
    })
};