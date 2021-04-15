import {Schema,model} from 'mongoose'
// campos a guardar
const videoSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String,
        trim: true
      },
      url: {
        type: String,
        required: true,
        trim:true,
        unique: true,
      },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
const Video=model('Video',videoSchema);
export default Video;
// export default model('Video',videoSchema)