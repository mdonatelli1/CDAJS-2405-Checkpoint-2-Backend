import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Country extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field((type) => ID)
    id?: number;

    @Column()
    @Field()
    code: string;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    emoji: string;

    @Column()
    @Field()
    continent: string;

    constructor(code: string, name: string, emoji: string, continent: string) {
        super();

        this.code = code;
        this.name = name;
        this.emoji = emoji;
        this.continent = continent;
    }
}
