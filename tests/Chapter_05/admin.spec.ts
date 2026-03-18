import { test, expect, Page } from "@playwright/test";
import { Login } from "../../page/login.ts";
import { User } from "../../page/user.ts";
import { Role, UserModel } from "../../models/user.models.ts";
import { faker, ne} from "@faker-js/faker";
import { generateRandomNumber, saveJsonData } from "../../Utils/utils.ts";

let page:Page;

test.beforeAll(async ({browser})=>{
    page=await browser.newPage();
});

test.afterAll(async ()=>{
    await page.close();
});

test("Admin can login Successfully",{tag: "@smoke"}, async ()=> {

    await page.goto("https://dmoneyportal.roadtocareer.net/login");

    const login=new Login(page);
    await login.userLogin("admin@dmoney.com","1234");

    await expect(page.getByRole('banner')).toContainText('Admin Dashboard');


});

test("Search by user id", async ()=>{

    const user=new User(page);
    await user.searchUser("103160");
    // await page.waitForTimeout(3000);
    

});

test("Create a new user",{tag:"@smoke"}, async ()=>{

    const user= new User(page);
    const userData:UserModel={
        fullName: faker.person.fullName(),
        email: `test${generateRandomNumber(1000,9999)}@gmail.com`,
        password: "1234",
        phoneNumber: `0120${generateRandomNumber(1000000,9999999)}`,
        nid: "12345698",
        role: Role.Customer
    }

    await user.createUser(userData);
    saveJsonData(userData, "resources/users.json");

});


