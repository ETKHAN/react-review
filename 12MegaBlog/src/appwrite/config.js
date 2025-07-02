import conf from '../conf/conf';
import { Client, ID, Databases, Storage, Query } from 'appwrite';

export class Service{
  client = new Client();
  databases;
  bucket;

  constructor(){
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);

    this.bucket = new Storage(this.client);
  }


  async createPost({title, slug, content, featuredImage, status, userId}){
    try{
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      )
    }catch(err){
      console.log("Appwrite service :: create post :: error", err);
    }
  }


  async updatePost(slug, {title, content, featuredImage, status, userId}){
    try{
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
        
      )
    }catch(err){
      console.log("Appwrite service:: update post :: ,", err)
    }
  }

  async deletePost(slug){
    try{
      return await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    }catch(err){
      console.log("Appwrite service :: delete post :: error,", err);

      return false;
    }
  }


  async getPost(slug){
    try{
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
    }catch(err){
      console.log("Appwrite service :: get Post :: error, ", err);

      return false;
    }
  }


  async getPosts(queries = [Query.equal("status", "active")]){
    try{
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries,
      )
    }catch(err){
      console.log("Appwrite service :: getPosts :: errors,", err);
      return false;
    }
  }


  async uploadFile(file){
    try{
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file,
      );
    }catch(err){
      console.log("Appwrite service :: uploadFile :: error ", err);
      return false;
    }

  }

  async deleteFile(fileId){
    try{
      await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId,
      )
    }catch(err){
      console.log("Appwrite service :: deleteFile :: error ", err);
      return false;
    }
  }

  getFilePreview(fileId){
    return this.bucket.this.getFilePreview(
      conf.appwriteBucketId,
      fileId,
    )

  }

}


const service = new Service();

export default service;