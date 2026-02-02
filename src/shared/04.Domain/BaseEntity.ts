import { ulid } from 'ulid';
export abstract class BaseEntity<T> {
    readonly id: string;
    protected props: T;

    constructor(id: string, props: T) {
        this.id = id ?? ulid();
        this.props = props;
    }
}
