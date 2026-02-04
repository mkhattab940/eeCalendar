import type { BaseEntity } from "@shared/04.Domain/BaseEntity.js";
import type { IRepository } from "@shared/04.Domain/IRepository.js";

export interface IApplicationCommand<T extends BaseEntity<any>>{
    readonly repository: IRepository<T>;
}