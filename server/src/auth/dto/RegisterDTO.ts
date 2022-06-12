import { IsEmail, MinLength } from "class-validator";

export class RegisterDTO {
	@MinLength(4, { message: "Username: Must be 4 characters long" })
	username: string;

	@MinLength(6, { message: "Password: Must be 6 characters long" })
	password: string;

	@IsEmail({}, { message: "Email: Must be an Email" })
	email: string;
}
