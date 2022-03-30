import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  //Defined o ID como ID único na aplicação
  @Field((_type) => ID)
  //ID será string
  id: string;

  //campo nome
  @Field()
  name: string;
}
