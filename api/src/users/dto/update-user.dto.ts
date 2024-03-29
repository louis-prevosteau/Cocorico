export class UpdateUserDto {
    readonly username: string;
    readonly avatar: string;
    readonly email: string;
    readonly password: string;
    readonly role: string;
    readonly address: string;
    readonly phone: string;
    readonly city: string;
    readonly zipcode: string;
    readonly country: string;
    readonly resetToken: string;
    readonly expiresAt: string;
}
