import {Query,Resolver} from 'type-graphql';

//realizando anotação decoration
@Resolver()
export class UserResolver {
  
  @Query(() => String)
  async hello() {
    return "Hello Word";
  }
}
