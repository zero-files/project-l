import Connection from "app/components/connections/Connection";
import Message from "app/components/messages/Message";
import Command from "./Command";

export default class LoginCommand extends Command {
  trigger:string;
  parse(content:string) {
    throw new Error("Method not implemented.");
  }
  execute(connection:Connection, message:Message):Promise<string> {
    throw new Error("Method not implemented.");
  }

}
