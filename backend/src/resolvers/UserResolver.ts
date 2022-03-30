import { Arg, Query, Resolver, Mutation } from "type-graphql";
import { User } from "../models/User";
import crypto from "crypto";

//realizando anotação decoration
@Resolver()
export class UserResolver {
  private data: User[] = [];

  @Query(() => [User])
  async users() {
    return this.data;
  }
  @Mutation(() => User)
  async createUser(
    //parament para receber o nome
    @Arg("name") name: string
  ) {
    const user = { id: crypto.randomUUID(), name: name };

    this.data.push(user);
    return user;
  }
}
