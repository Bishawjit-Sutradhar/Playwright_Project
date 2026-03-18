import fs from 'fs';
import { UserModel } from '../models/user.models';

export function generateRandomNumber(min: number, max: number):number{

    return Math.floor(Math.random()*(max-min)+min);
}

export function saveJsonData(jsonObject:object, fileUrl: string):void{

    let dataArray: object[]=[];

    if(fs.existsSync(fileUrl)){
        const fileContent= fs.readFileSync(fileUrl, 'utf-8');
        dataArray= JSON.parse(fileContent);
    }
    dataArray.push(jsonObject);
    fs.writeFileSync(fileUrl, JSON.stringify(dataArray, null, 2));
}
 
export function getLastUser(fileUrl: string):UserModel{
    const fileContent=fs.readFileSync(fileUrl, 'utf-8');

    let dataArray=JSON.parse(fileContent);

    return dataArray[dataArray.length-1];
}
