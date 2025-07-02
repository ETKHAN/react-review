import conf from "../conf/conf";
import { Client, Account,ID} from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor(){
    console.log(conf.appwriteUrl)
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({email, password, name}){
    try{
      const userAccount = await this.account.create(ID.unique, email,password, name);

      if(userAccount){
        return await this.login({email, password})

      }else{
        return userAccount;k
      }

    }catch(error){
      throw error;
    }
    
  }

  async login({email, password}){
    try{
      return await this.account.createEmailPasswordSession(email, password);
    }catch(error){
      throw error;
    }
  }

  async getCurrentUser(){
    try{
      return await this.account.get();
    }catch(error){
      throw error
    }
    
  }


  async logout(){
    try{
      await this.account.deleteSessions();
    }catch(error){
      console.log("Appwrite service :: logout :: error", error);
    }
  }
  
}

const authService = new AuthService();

export default authService;