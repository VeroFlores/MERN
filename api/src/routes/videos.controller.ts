import {RequestHandler} from 'express'
import Video from './Videos'
export const getVideos:RequestHandler=async(req,res)=>{
    try{
        const videos=await Video.find()
        return res.json(videos);
    }catch(error){
        res.json(error)
    }

}
export const createVideos:RequestHandler=async(req,res)=>{
    try{
        const videoFound=await Video.findOne({ulr:req.body.url})
        if(videoFound)
        return res.status(301).json({message:'The URL already exist'})
        const video=new Video(req.body)
        const savedVideo= await video.save()
        res.json(savedVideo);
    }catch(err){
        console.log("Can't create new user: %s", err);
    }

    
}
export const getVideo:RequestHandler=async(req,res)=>{
    const videoFound=await Video.findById(req.params.id)
    if(!videoFound) return res.status(204).json();
    return res.json(videoFound)
}
export const deleteVideo:RequestHandler=async (req,res)=>{
    const videoFound=await Video.findByIdAndDelete(req.params.id)
    if(!videoFound) return res.status(204).json();
    return res.json(videoFound)
}
export const updateVideo:RequestHandler=async (req,res)=>{
    const videoUpdated=await Video.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(!videoUpdated) return res.status(204).json();
    return res.json(videoUpdated)
}