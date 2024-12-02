import { Arg, Mutation, Resolver } from "type-graphql";

import { dataSource } from "../config/db";
import { Country } from "../entities/Country";

@Resolver(Country)
export class CountryMutations {
    @Mutation(() => Country)
    async publishCountry(
        @Arg("code") code: string,
        @Arg("name") name: string,
        @Arg("emoji") emoji: string,
        @Arg("continent") continent: string
    ): Promise<Country> {
        const country: Country = dataSource.manager.create(Country, {
            code,
            name,
            emoji,
            continent,
        });

        await dataSource.manager.save(country);

        return country;
    }
}
