import { IsEmpty, IsEnum, IsNumber, IsOptional, IsString } from "class-validator"
import { Category } from "../schemas/book.schema"
import { User } from "../../auth/schemas/user.schema"

export class UpdateBookDto {
    @IsOptional()
    @IsString()
    readonly title:string

    @IsOptional()
    @IsString()
    readonly description:string

    @IsOptional()
    @IsString()
    readonly author:string

    @IsOptional()
    @IsNumber()
    readonly price:number

    @IsOptional()
    @IsEnum(Category,{message:"Please Enter Correct category"})
    readonly category:Category

    @IsEmpty({message:"You Cannot pass user id"})
    readonly user:User
}