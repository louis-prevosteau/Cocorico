export class CreateProductDto {
    readonly name: string;
    readonly image: string;
    readonly description: string;
    readonly price: number;
    readonly shop: string;
    readonly madeIn: string;
    readonly available: boolean;
    readonly returnable: boolean;
}
