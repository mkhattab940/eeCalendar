import { container } from './shared/02.Infrastructure/container.js';
import { registerEmployeeModule } from './modules/employee/employee.module.js';
import { registerHttpProvider } from './shared/02.Infrastructure/web/http.provider.js';
import { globalErrorHandler } from './shared/02.Infrastructure/web/error.middleware.js';
import historyApiFallback  from 'connect-history-api-fallback';

registerHttpProvider(container);

registerEmployeeModule(container);

const app = container.resolve('app');

app.use('/employees', container.resolve('employeeRouter'));

app.use(historyApiFallback()); // Middleware for handling client-side routing in SPAs, should be placed after all other routes and middleware.

app.use(globalErrorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});