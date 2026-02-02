import type { BaseEntity } from "../../04.Domain/BaseEntity.js";
import type { IRepository } from "../../03.Application/ports/IRepository.js";

export interface IApplicationCommand<T extends BaseEntity<any>>{
    readonly repository: IRepository<T>;
}