import { ulid } from 'ulid';
export abstract class BaseEntity<T> {
    readonly id: string;
    protected props: T;

    constructor(props: T) {
        this.id = ulid();
        this.props = props;
    }

    public getPropsCopy(): T {
        return Object.freeze({ ...this.props });
    }
}
