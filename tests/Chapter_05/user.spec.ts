import {test, expect, Page} from "@playwright/test";
import { Login } from "../../page/login";
import { getLastUser } from "../../Utils/utils";

test("User can login Successfully",{tag: "@smoke"}, async ({page})=>{

    await page.goto("https://dmoneyportal.roadtocareer.net/login");
    let login=new Login(page);
    const lastUserData=getLastUser("resources/users.json");

    await login.userLogin(lastUserData.email, lastUserData.password);


});