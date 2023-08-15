export class CreateUserDto {
    readonly avatar?: string;
    readonly username: string;
    readonly email: string;
    readonly password: string;
    readonly role?: string;
}
