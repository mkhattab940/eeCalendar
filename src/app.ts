import { container } from './shared/02.Infrastructure/container.js';
import { registerEmployeeModule } from './modules/employee/employee.module.js';
//import { registerHttpModule } from './interface/http.module';

registerEmployeeModule(container);

