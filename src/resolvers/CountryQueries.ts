import { Arg, Query, Resolver } from "type-graphql";

import { dataSource } from "../config/db";
import { Country } from "../entities/Country";

@Resolver(Country)
export class CountryQueries {
    @Query(() => [Country])
    async getAllCountries(): Promise<Country[]> {
        return await dataSource.manager.find(Country);
    }

    @Query(() => Country, { nullable: true })
    async getCountryByCode(@Arg("code") code: string): Promise<Country | null> {
        return await dataSource.manager.findOne(Country, {
            where: { code },
        });
    }

    @Query(() => [Country])
    async getAllCountriesByContinent(
        @Arg("continent") continent: string
    ): Promise<Country[]> {
        return await dataSource.manager.find(Country, {
            where: { continent },
        });
    }
}
